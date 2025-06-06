import { changeTitle } from '@/redux/slice/packageInfo';
import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';

// ssr
export async function getServerSideProps(context) {
  const { id } = context?.query;
  let urlGet = `${process.env.NEXT_PUBLIC_API_URL}apiUser/v1/frontend/getPackage/${id}?websiteId=${process.env.NEXT_PUBLIC_WEBSITE_ID}`
  try {
    const res = await fetch(urlGet);
    if (!res.ok) {
      throw new Error('Failed to fetch data');
    }

    const data = await res.json();
    const packageInfo = data?.data[0]

    return {
      props: {
        packageInfo,  
      },
    };
  } catch (error) {
    console.error('Error fetching data:', error);

    return {
      props: {
        packageInfo: null, 
      },
    };
  }
}

function PackageInfo({ packageInfo }) {
  function createMarkup(c) {
    return { __html: c };
  }

  const [packageData, setPackageData] = useState(packageInfo);
  const [error, setError] = useState(null);
  const dispatch = useDispatch()
  useEffect(() => {

    dispatch(changeTitle(packageData?.title))
  }, [packageData?.title])

  useEffect(() => {
    if (packageInfo !== null) {
      setPackageData(packageInfo);
    } else {
      setError('No packages available.');
    }
  }, [packageData]);

  return (
    <div className="relative min-h-screen flex items-center justify-center">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/bg-travel1.jpg')",
          opacity: 0.4, 
          filter: 'brightness(80%)',
        }}
      ></div>

      {/* Main Content */}
      <div className="relative z-10 p-8 bg-white bg-opacity-90 rounded-lg shadow-lg w-100 text-left m-5">
        <h3 className="text-5xl font-extrabold text-blue-600 border-b-4 border-yellow-400 pb-5">
          {packageData?.title || 'Package Info'}
        </h3>

        <div className="my-10 text-lg text-gray-700">
          {error ? (
            <p className="text-red-500 font-bold">{error}</p>
          ) : (
            <div dangerouslySetInnerHTML={createMarkup(packageData?.slugContent || '')}></div>
          )}
        </div>
      </div>
    </div>
  );
}

export default PackageInfo;
