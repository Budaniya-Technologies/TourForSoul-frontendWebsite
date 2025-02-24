import React, { useState, useEffect } from "react";
import PackageInfoElementCard from "@/component/PackageInfoElementCard"; // Assuming this is a predefined component

function PackageInfo({ packageInfo }) {
  const [packageData, setPackageData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (packageInfo && packageInfo.length !== 0) {
      setPackageData(packageInfo); // Update state with fetched data
      setLoading(false);
    } else {
      setError("Failed to load package data");
      setLoading(false);
    }
  }, [packageInfo]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="my-10 mx-auto p-8 rounded-lg">
      <div className="flex justify-center mb-8">
      <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-blue-600 border-b-4 border-yellow-400 pb-2 w-max">
          Trekking Tours Package
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {packageData.map((item, key) => (
          <div key={key} className="bg-white p-6 rounded-lg shadow-xl transform transition-all hover:scale-105 hover:shadow-2xl">
            <PackageInfoElementCard
              packageName={item.title}
              packagePrice={`₹ ${item.price} (Group Discount Available)`}
              packageStartingDest={item?.pickup}
              packageEndDest={item?.dropPoint} 
              packageDuration={item?.duration}
              packageInfoLink={item?.slug}
              packageImg={item?.image}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export async function getServerSideProps() {
  let urlGet = `${process.env.NEXT_PUBLIC_API_URL}apiUser/v1/frontend/getAllPackage?websiteId=${process.env.NEXT_PUBLIC_WEBSITE_ID}`;
  try {
    const res = await fetch(urlGet);
    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }

    const data = await res.json();
    const packageInfo = data?.data;

    return {
      props: {
        packageInfo,
      },
    };
  } catch (error) {
    console.error("Error fetching data:", error);
    return {
      props: {
        packageInfo: [],
      },
    };
  }
}

export default PackageInfo;
