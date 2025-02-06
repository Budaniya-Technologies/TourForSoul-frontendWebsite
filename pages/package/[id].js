import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { Swiper, SwiperSlide } from 'swiper/react';
import { apiGet } from '@/Utils/http';
import PackageInfoElementCard from '@/component/PackageInfoElementCard';
import Image from 'next/image';
import Link from 'next/link';

const getAllPackage = 'apiUser/v1/frontend/getPackage/test-data?websiteId=679b36e0bae402d695b876bf';

function PackageInfo() {
  function createMarkup(c) {
    return { __html: c };
  }
  const router = useRouter();
  const { id } = router.query;

  const [packageData, setPackageData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    apiGet(getAllPackage)
      .then((response) => {
        if (response?.status === 200 && Array.isArray(response?.data?.data)) {
          setPackageData(response?.data?.data[0]);
        } else {
          setError('No packages available.');
        }
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
        setError('Failed to load packages.');
      })
      .finally(() => {
        setLoading(false);
      });
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
