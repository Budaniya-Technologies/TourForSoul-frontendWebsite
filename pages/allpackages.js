import React, { useState, useEffect } from "react";
import { FaMapMarkerAlt, FaClock } from "react-icons/fa";

function PackageInfo({ packageInfo }) {
  const [packageData, setPackageData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (packageInfo && packageInfo.length !== 0) {
      setPackageData(packageInfo);
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
    <div className="my-10 mx-auto max-w-7xl p-8">
      {/* Section Heading */}
      <div className="flex justify-center mb-10">
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-blue-600 border-b-4 border-yellow-400 pb-2 w-max">
          Trekking Tours Package
        </h2>
      </div>

      {/* Package Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {packageData.map((item, key) => (
          <div
            key={key}
            className="bg-white rounded-lg shadow-lg overflow-hidden"
          >
            {/* Image Section */}
            <div className="h-56 w-full overflow-hidden">
              <img
                src={item?.image}
                alt={item?.title}
                className="h-full w-full object-cover"
              />
            </div>

            {/* Package Details */}
            <div className="p-6 flex flex-col justify-between">
              <h3 className="text-xl font-bold text-blue-600">{item?.title}</h3>
              <p className="text-lg text-gray-600 mt-2 font-semibold">
                {`₹ ${item?.price} (Group Discount Available)`}
              </p>
              <h5 className="text-lg text-gray-600 mt-2">{item?.description}</h5>

              {/* Location & Duration */}
              <div className="mt-2">
                {/* Location */}
                <p className="text-sm text-gray-500 flex items-center gap-2">
                  <FaMapMarkerAlt className="text-red-500" />
                  <span className="font-semibold">Location:</span> {item?.dropPoint}
                </p>
                
                {/* Duration */}
                <p className="text-sm text-gray-500 flex items-center gap-2 mt-1">
                  <FaClock className="text-blue-500" />
                  <span className="font-semibold">Duration:</span> {item?.duration}
                </p>
              </div>

              {/* Button Link */}
              <a
                href={item?.slug}
                className="mt-4 inline-block text-center bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg transition-all duration-300 hover:bg-blue-700"
              >
                View Details
              </a>
            </div>
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
