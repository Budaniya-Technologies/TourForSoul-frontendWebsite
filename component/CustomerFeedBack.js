import React, { useRef } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import LogoImg1 from "public/SummerTrack.jpg";
import { FaStar, FaChevronLeft, FaChevronRight } from "react-icons/fa";

const feedbackData = [
  {
    id: 1,
    name: "Vijay",
    role: "Customer",
    feedback:
      "Great service, everything stated, plus upgrades was done for me, without any hassle. Would recommend you to everyone. Very simple and easy. Had a great holiday. Thank you!",
    rating: 5,
  },
  {
    id: 2,
    name: "Varsha",
    role: "Customer",
    feedback:
      "I feel like I got a very good deal with Travel Online. The communication was good, and I liked that I could pay a deposit and then pay the balance later. The transfers and inclusions were very good value. I would use Travel Online again and have recommended it to friends.",
    rating: 4,
  },
  {
    id: 3,
    name: "Rahul",
    role: "Traveler",
    feedback:
      "Amazing experience! The booking process was seamless, and the customer support was outstanding. Highly recommended for hassle-free travel.",
    rating: 5,
  },
  {
    id: 4,
    name: "Vijay",
    role: "Customer",
    feedback:
      "Great service, everything stated, plus upgrades was done for me, without any hassle. Would recommend you to everyone. Very simple and easy. Had a great holiday. Thank you!",
    rating: 5,
  },
  {
    id: 5,
    name: "Varsha",
    role: "Customer",
    feedback:
      "I feel like I got a very good deal with Travel Online. The communication was good, and I liked that I could pay a deposit and then pay the balance later. The transfers and inclusions were very good value. I would use Travel Online again and have recommended it to friends.",
    rating: 4,
  },
  {
    id: 6,
    name: "Rahul",
    role: "Traveler",
    feedback:
      "Amazing experience! The booking process was seamless, and the customer support was outstanding. Highly recommended for hassle-free travel.",
    rating: 5,
  },
];

function CustomerFeedBack() {
  const scrollRef = useRef(null);

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
            {feedbackData.map(({ id, name, role, feedback, rating }) => (
              <motion.div
                key={id}
                className="p-4 w-80 h-64 flex-shrink-0"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: id * 0.2 }}
              >
                <div className="h-full w-full bg-white shadow-lg p-6 rounded-xl hover:shadow-2xl transition-shadow flex flex-col justify-between">
                  <p className="text-gray-600 text-sm overflow-hidden line-clamp-4">
                    {feedback}
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
                      src={LogoImg1}
                      className="w-10 h-10 rounded-full object-cover border-2 border-gray-300"
                    />
                    <div>
                      <span className="text-gray-900 font-medium text-sm">
                        {name}
                      </span>
                      <p className="text-gray-500 text-xs">{role}</p>
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
