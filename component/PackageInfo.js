"use client";

import { useState, useEffect, useRef } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import PackageInfoElementCard from "./PackageInfoElementCard";
import { apiGet } from "@/Utils/http";

const getAllPackage =
  "apiUser/v1/frontend/getAllPackage?websiteId=679b36e0bae402d695b876bf";

function PackageInfo() {
  const [packageData, setPackageData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const sliderRef = useRef(null);

  useEffect(() => {
    apiGet(getAllPackage)
      .then((response) => {
        if (response?.status === 200 && Array.isArray(response?.data?.data)) {
          setPackageData(response.data.data);
        } else {
          setError("No packages available.");
        }
      })
      .catch(() => {
        setError("Failed to load packages.");
      })
      .finally(() => setLoading(false));
  }, []);

  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider || packageData.length === 0) return;

    let scrollAmount = slider.children[0]?.offsetWidth + 16 || 320;
    const scrollSpeed = 3000;
    let interval;

    const autoScroll = () => {
      if (slider.scrollLeft + slider.clientWidth >= slider.scrollWidth) {
        slider.scrollTo({ left: 0, behavior: "smooth" });
      } else {
        slider.scrollBy({ left: scrollAmount, behavior: "smooth" });
      }
    };

    interval = setInterval(autoScroll, scrollSpeed);

    return () => clearInterval(interval);
  }, [packageData]);

  const scrollLeft = () => {
    if (sliderRef.current) {
      let scrollAmount = sliderRef.current.children[0]?.offsetWidth + 16 || 320;
      sliderRef.current.scrollBy({ left: -scrollAmount, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (sliderRef.current) {
      let scrollAmount = sliderRef.current.children[0]?.offsetWidth + 16 || 320;
      sliderRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  const truncateDescription = (text, wordLimit = 20) => {
    if (!text) return "N/A";
  
    const words = text.trim().split(/\s+/);
  
    if (words.length > wordLimit) {
      return words.slice(0, wordLimit).join(" ") + " ....";
    }
  
    return text; 
  };
  

  return (
    <div className="relative container mx-auto">
      <div className="text-center mb-2 mt-6">
      <h2 className="text-5xl font-bold text-blue-600 mb-8 border-b-4 border-yellow-400 inline-block">
      Trekking Tours Package
      </h2>
      </div>

      {loading && <p className="text-center text-gray-500">Loading packages...</p>}
      {error && <p className="text-center text-red-500">{error}</p>}

      <button
        className="absolute left-2 top-1/2 transform -translate-y-1/2 z-10"
        onClick={scrollLeft}
      >
        <FaChevronLeft className="text-white text-3xl" />
      </button>

      <div className="overflow-hidden relative w-full">
        <div
          ref={sliderRef}
          className="flex space-x-4 py-2 transition-all duration-500 ease-in-out"
          style={{
            scrollBehavior: "smooth",
            WebkitOverflowScrolling: "touch",
            overflowX: "auto",
            scrollbarWidth: "none",
          }}
        >
          {packageData.concat(packageData).map((item, key) => (
            <div
              key={key}
              className="min-w-[320px] bg-white rounded-lg shadow-md transition hover:shadow-xl p-3"
            >
              <PackageInfoElementCard
                packageName={item?.title || "N/A"}
                packageDescription={truncateDescription(item?.description)}
                packagePrice={`₹ ${item?.price || "N/A"}`}
                packageStartingDest={item?.pickUpPoint || "N/A"}
                packageEndDest={item?.dropPoint || "N/A"}
                packageDuration={item?.duration || "N/A"}
                packageInfoLink={`/${item?.slug}`}
                packageImg={item?.image || "/default-image.jpg"}
              />
            </div>
          ))}
        </div>
      </div>

      <button
        className="absolute right-2 top-1/2 transform -translate-y-1/2 z-10"
        onClick={scrollRight}
      >
        <FaChevronRight className="text-white text-3xl" />
      </button>
    </div>
  );
}

export default PackageInfo;
