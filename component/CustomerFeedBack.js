import React, { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { FaStar, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { apiGet } from "@/Utils/http";


const ApiEndpoint = `apiAdmin/v1/testimonial?websiteId=${process.env.NEXT_PUBLIC_WEBSITE_ID}`;


function CustomerFeedBack() {
  const scrollRef = useRef(null);
  const [feedbackData, setFeedbackData] = useState([]);
  const ipURL = process.env.NEXT_PUBLIC_API_URL;
const bannerImg = `${ipURL.slice(0, ipURL.length - 1)}`;

  // Fetch feedback from API
  useEffect(() => {
    const fetchFeedback = async () => {
      try {
        const res = await apiGet(ApiEndpoint);
        setFeedbackData(res.data); // assuming the API returns the array directly
      } catch (error) {
        console.error("Error fetching feedback:", error);
      }
    };

    fetchFeedback();
  }, []);

  const scrollHandler = (direction) => () => {
    if (scrollRef.current) {
      const scrollAmount = 300;
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="bg-gradient-to-r from-gray-100 to-gray-300 py-8">
      <section className="text-gray-700 body-font">
        <div className="container px-5 py-10 mx-auto">
          <div className="flex justify-center mb-8">
            <h2 className="text-5xl font-bold text-blue-600 border-b-4 border-yellow-400 pb-2 w-max">
              Customer Testimonials
            </h2>
          </div>

          {/* Scroll Buttons */}
          <div className="flex justify-end mb-4 space-x-4">
            <button
              onClick={scrollHandler("left")}
              className="p-2 rounded-full bg-blue-500 text-white hover:bg-blue-700 transition"
            >
              <FaChevronLeft size={20} />
            </button>
            <button
              onClick={scrollHandler("right")}
              className="p-2 rounded-full bg-blue-500 text-white hover:bg-blue-700 transition"
            >
              <FaChevronRight size={20} />
            </button>
          </div>

          {/* Scrollable Testimonials */}
          <div
            ref={scrollRef}
            className="flex space-x-6 overflow-x-hidden overflow-y-hidden scrollbar-hide scroll-smooth"
          >
            {feedbackData.map(({ _id, name, designation, description, rating, profileImage }, idx) => (
              <motion.div
                key={_id}
                className="p-4 w-80 h-64 flex-shrink-0"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.2 }}
              >
                <div className="h-full w-full bg-white shadow-lg p-6 rounded-xl hover:shadow-2xl transition-shadow flex flex-col justify-between">
                  <p className="text-gray-600 text-sm overflow-hidden line-clamp-4">
                    {description}
                  </p>

                  {/* Star Rating */}
                  <div className="flex mb-2">
                    {[...Array(5)].map((_, index) => (
                      <FaStar
                        key={index}
                        className={`text-yellow-500 ${index < rating ? "fill-current" : "text-gray-300"}`}
                        size={16}
                      />
                    ))}
                  </div>

                  <div className="flex items-center space-x-3">
                    <Image
                      width={40}
                      height={40}
                      alt="testimonial"
                      src={profileImage.startsWith("http") ? profileImage : `${bannerImg}${profileImage}`}
                      className="w-10 h-10 rounded-full object-cover border-2 border-gray-300"
                    />
                    <div>
                      <span className="text-gray-900 font-medium text-sm">
                        {name}
                      </span>
                      <p className="text-gray-500 text-xs">{designation}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default CustomerFeedBack;
