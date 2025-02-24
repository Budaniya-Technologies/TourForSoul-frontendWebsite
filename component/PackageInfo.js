import { useState, useEffect } from "react";
import PackageInfoElementCard from "./PackageInfoElementCard";
import { apiGet } from "@/Utils/http";

const getAllPackage =
  "apiUser/v1/frontend/getAllPackage?websiteId=679b36e0bae402d695b876bf";

function PackageInfo() {
  const [packageData, setPackageData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    apiGet(getAllPackage)
      .then((response) => {
        if (response?.status === 200 && Array.isArray(response?.data?.data)) {
          setPackageData(response.data.data);
          setLoading(false);
        } else {
          setError("No packages available.");
          setLoading(false);
        }
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setError("Failed to load packages.");
        setLoading(false);
      });
  }, []);

  return (
    <div className="my-10 mx-auto p-8 rounded-lg">
      {/* Styling inside the component */}
      <style jsx>{`
        .package-slider-container {
          margin-top: 20px;
        }

        .package-card-container img {
          height: 200px;
          object-fit: cover;
          width: 100%;
        }

        .package-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr); /* 3 cards per row */
        }

        @media (max-width: 1024px) {
          .package-grid {
            grid-template-columns: repeat(
              2,
              1fr
            ); /* 2 cards per row for medium screens */
          }
        }

        @media (max-width: 640px) {
          .package-grid {
            grid-template-columns: 1fr; /* 1 card per row for small screens */
          }
        }
      `}</style>

      {/* Centered Heading */}
      <div className="flex justify-center mb-8">
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-blue-600 border-b-4 border-yellow-400 pb-2 w-max">
          Trekking Tours Package
        </h2>
      </div>

      <div className="package-slider-container">
        {loading && <p>Loading packages...</p>}
        {error && <p>{error}</p>}

        {packageData.length > 0 && !loading && !error && (
          <div className="package-grid">
            {packageData.map((item, key) => (
              <div key={key} className="package-card-container px-4 py-6">
                <div className="bg-white p-6 rounded-lg shadow-xl transform transition-all hover:scale-105 hover:shadow-2xl">
                  <PackageInfoElementCard
                    packageName={item?.title || "N/A"}
                    packagePrice={`₹ ${item?.price || "N/A"}`}
                    packageStartingDest={item?.pickUpPoint || "N/A"}
                    packageEndDest={item?.dropPoint || "N/A"}
                    packageDuration={item?.duration || "N/A"}
                    packageInfoLink={`/${item?.slug}`}
                    packageImg={item?.image || "/default-image.jpg"}
                  />
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default PackageInfo;
