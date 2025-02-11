import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import PackageInfoElementCard from "@/component/PackageInfoElementCard"; // Assuming this is a predefined component
import { apiGet } from "@/Utils/http"; // Assuming apiGet is a helper function you created

function PackageInfo({ packageInfo }) {
  const [packageData, setPackageData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    console.log(packageInfo)
    if (packageInfo.length !== 0) {
      setPackageData(packageInfo); // Update state with fetched data
      setLoading(false);
    } else {
      console.error("Error fetching package data:", err.message); // Log any errors
      setError("Failed to load package data");
      setLoading(false);
    }
  }, [packageData]);

  // Slider settings
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  // If loading, show a loading message
  if (loading) {
    return <div>Loading...</div>;
  }

  // If there's an error, show an error message
  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="my-10 mx-auto p-8 rounded-lg">
      <style jsx>{`
        .package-card-container img {
          height: 200px;
          object-fit: cover;
          width: 100%;
        }
      `}</style>
      <div>
        <h2 className="text-4xl text-center font-semibold text-gray-900 my-8">
          Featured Trekking Tours
        </h2>
      </div>
      <div className="package-slider-container">
        <Slider {...settings}>
          {/* Display the packages */}
          {packageData.map((item, key) => {
            // if (item.isActive) {
            return (
              <div key={key} className="package-card-container px-4 py-6">
                <div className="bg-white p-6 rounded-lg shadow-xl transform transition-all hover:scale-105 hover:shadow-2xl">
                  <PackageInfoElementCard
                    packageName={item.title}
                    packagePrice={`${item.price} /Per (Group Discount Available)`}
                    packageStartingDest={item?.pickup}
                    packageEndDest={item?.dropPoint}  // Assuming 'dropPoint' is available in the data
                    packageDuration={item?.duration}
                    packageInfoLink={item?.slug}
                    packageImg={item?.image}
                  />
                </div>
              </div>
            );
            // }
            return null; // Only render active and home page packages
          })}
        </Slider>
      </div>
    </div>
  );
}

// ssr
export async function getServerSideProps() {
  let urlGet = `${process.env.NEXT_PUBLIC_API_URL}apiUser/v1/frontend/getAllPackage?websiteId=${process.env.NEXT_PUBLIC_WEBSITE_ID}`
  console.log(urlGet)
  try {
    const res = await fetch(urlGet);
    if (!res.ok) {
      throw new Error('Failed to fetch data');
    }

    const data = await res.json();
    const packageInfo = data?.data

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

export default PackageInfo;
