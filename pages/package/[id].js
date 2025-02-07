import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { Swiper, SwiperSlide } from 'swiper/react';
import { apiGet } from '@/Utils/http';
import PackageInfoElementCard from '@/component/PackageInfoElementCard';
import Image from 'next/image';
import Link from 'next/link';
import axios from 'axios';

// ssr
export async function getServerSideProps(context) {
  const { id } = context?.query;
  console.log(id)
  let urlGet = `${process.env.NEXT_PUBLIC_API_URL}apiUser/v1/frontend/getPackage/${id}?websiteId=${process.env.NEXT_PUBLIC_WEBSITE_ID}`
  console.log(urlGet)
  try {
    const res = await fetch(urlGet);
    if (!res.ok) {
      throw new Error('Failed to fetch data');
    }

    const data = await res.json();
    const packageInfo = data?.data[0]

    return {
      props: {
        packageInfo,  // this is required and must be an object
      },
    };
  } catch (error) {
    console.error('Error fetching data:', error);

    // Return an empty object or fallback data in case of error
    return {
      props: {
        packageInfo: null,  // Or some default value
      },
    };
  }
}

function PackageInfo({ packageInfo }) {
  function createMarkup(c) {
    return { __html: c };
  }

  const [packageData, setPackageData] = useState([]);
  // const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    console.log(packageInfo)
    // apiGet(getAllPackage)
    //   .then((response) => {
    if (packageInfo !== null) {
      console.log(packageInfo)
      setPackageData(packageInfo);
    } else {
      setError('No packages available.');
    }
  }, []);

  return (
    <div className="my-10 mx-auto p-8 rounded-lg">
      <div>
        <h3 className='text-2xl text-center my-3'>{packageData?.title}</h3>
        <hr className='h-1 w-100 bg-green-950 rounded-lg' />
        <h5 className='text-lg'><span>Package Info :- </span>{packageData?.description}</h5>
      </div>

      {/* pickup and drop website */}
      <div className='my-5'>
        <div className='my-3'>
          <h5 className='text-lg'><span>Price :- </span>{packageData?.price}/Person (Group Discount Available)</h5>
        </div>
        <div className='my-3'>
          <h5 className='text-lg'><span>Duration :- </span>{packageData?.duration}</h5>
        </div>
        <div className='my-3'>
          <h5 className='text-lg'><span>Pickup Location :- </span>{packageData?.pickUpPoint}</h5>
        </div>
        <div className='my-3'>
          <h5 className='text-lg'><span>Drop Location :- </span>{packageData?.dropPoint}</h5>
        </div>
        <div className='my-3'>
          <h5 className='text-lg'><span>Package Pdf :- </span><Link className='text-green-950 font-bold' href={`${packageData?.pdf}`} target='_blank'>Package Pdf</Link></h5>
        </div>
      </div>
      {/* image section */}
      <div>
        <Image className='m-auto b-4 rounded-lg' src={packageData?.image} width={500}
          height={500}
          alt="package image" />
      </div>
      {/* slug content */}
      <div className='my-10'>
        <div dangerouslySetInnerHTML={createMarkup(packageData?.slugContent)}></div>
      </div>
    </div>
  );
}

export default PackageInfo;
