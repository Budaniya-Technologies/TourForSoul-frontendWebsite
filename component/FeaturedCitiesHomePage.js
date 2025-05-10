"use client";

import React, { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { apiGet } from "@/Utils/http";

const getHikingStylesAPI = `apiAdmin/v1/hiking-style?websiteId=${process.env.NEXT_PUBLIC_WEBSITE_ID}`;

const FeaturedCitiesHomePage = () => {
  const [hikingStyles, setHikingStyles] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchHikingStyles = async () => {
      try {
        const res = await apiGet(getHikingStylesAPI);
        console.log(res.data);
        setHikingStyles(res.data);
        setLoading(false);
      } catch (err) {
        console.error("Failed to fetch data:", err);
        setError("Failed to load hiking styles.");
        setLoading(false);
      }
    };

    fetchHikingStyles();
  }, []);

  const prevSlide = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? hikingStyles.length - 1 : prev - 1
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prev) =>
      prev === hikingStyles.length - 1 ? 0 : prev + 1
    );
  };

  if (loading) {
    return <div className="text-center py-20">Loading...</div>;
  }

  if (error) {
    return <div className="text-center py-20 text-red-500">{error}</div>;
  }

  if (hikingStyles.length === 0) {
    return <div className="text-center py-20">No hiking styles found.</div>;
  }

  const currentStyle = hikingStyles[currentIndex];

  return (
    <div className="w-full">
      <div className="flex justify-center mt-6">
        <h2 className="text-3xl md:text-5xl font-bold text-blue-600 border-b-4 border-yellow-400 pb-2">
          Choose Your Hiking Style
        </h2>
      </div>
      <div className="flex flex-col md:flex-row items-center justify-center w-full gap-6 md:gap-12 mt-10 mb-20">
        {/* Left Side - Image */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentStyle.id}
            className="w-full md:w-1/2 rounded-lg overflow-hidden shadow-lg"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            transition={{ duration: 0.5 }}
          >
            <img
              src={currentStyle.image}
              alt={currentStyle.title}
              className="w-full h-60 md:h-[500px] object-cover rounded-lg"
            />
          </motion.div>
        </AnimatePresence>

        {/* Right Side - Content */}
        <motion.div
          key={currentStyle.id + "-text"}
          className="w-full md:w-1/2 text-center md:text-left"
          initial={{ opacity: 0.8, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl md:text-4xl font-bold text-blue-600 mb-3">
            {currentStyle.title}
          </h2>
          <p className="text-gray-700 text-lg">{currentStyle.description}</p>

          {/* Navigation Buttons */}
          <div className="flex items-center justify-center md:justify-start gap-6 mt-6">
            <button
              onClick={prevSlide}
              className="p-3 bg-blue-600 text-white rounded-full shadow-md hover:bg-blue-700 transition"
            >
              <FaChevronLeft size={24} />
            </button>
            <button
              onClick={nextSlide}
              className="p-3 bg-blue-600 text-white rounded-full shadow-md hover:bg-blue-700 transition"
            >
              <FaChevronRight size={24} />
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default FeaturedCitiesHomePage;
