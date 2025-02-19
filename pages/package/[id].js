import { changeTitle } from '@/redux/slice/packageInfo';
import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';

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
  const [error, setError] = useState(null);
  const dispatch = useDispatch()
  useEffect(() => {
    
    dispatch(changeTitle(packageData?.title))
  }, [packageData?.title])

  useEffect(() => {
    // console.log(packageInfo)
    if (packageInfo !== null) {
      setPackageData(packageInfo);
    } else {
      setError('No packages available.');
    }
  }, []);

  return (
    <div className="my-10 mx-auto p-8 rounded-lg">
      <div>
        <h3 className="text-5xl font-extrabold text-blue-600 border-b-4 border-yellow-400 pb-5 text-center mx-auto w-max">{packageData?.title}</h3>
      </div>
      <div className='my-10' style={{display: 'flex', justifyContent: 'space-evenly'}}>
        <div dangerouslySetInnerHTML={createMarkup(packageData?.slugContent)}></div>
      </div>
    </div>
  );
}

export default PackageInfo;
