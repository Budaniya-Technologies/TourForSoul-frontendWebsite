import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import LogoImg1 from "public/SummerTrack.jpg";
import { FaStar } from "react-icons/fa"; // Importing star icon

const feedbackData = [
  {
    id: 1,
    name: "Vijay",
    role: "Customer",
    feedback:
      "Great service, everything stated, plus upgrades was done for me, without any hassle. Would recommend you to everyone. Very simple and easy. Had a great holiday. Thank you!",
    rating: 5, // Rating out of 5
  },
  {
    id: 2,
    name: "Varsha",
    role: "Customer",
    feedback:
      "I feel like I got a very good deal with Travel Online. The communication was good, and I liked that I could pay a deposit and then pay the balance later. The transfers and inclusions were very good value. I would use Travel Online again and have recommended it to friends.",
    rating: 4, // Rating out of 5
  },
  {
    id: 3,
    name: "Rahul",
    role: "Traveler",
    feedback:
      "Amazing experience! The booking process was seamless, and the customer support was outstanding. Highly recommended for hassle-free travel.",
    rating: 5, // Rating out of 5
  },
  {
    id: 4,
    name: "Sneha",
    role: "Customer",
    feedback:
      "Excellent service with great offers and discounts. The entire trip was well planned and executed perfectly. Looking forward to booking again!",
    rating: 4, // Rating out of 5
  },
];

function CustomerFeedBack() {
  return (
    <div className="bg-gradient-to-r from-gray-100 to-gray-300 py-12">
      <section className="text-gray-700 body-font">
        <div className="container px-5 py-14 mx-auto">
        <div className="flex justify-center mb-8">
        <h2 className="text-5xl font-bold text-blue-600 border-b-4 border-yellow-400 pb-2 w-max">
        Customer Testimonials
        </h2>
      </div>
          <div className="flex flex-wrap -m-4">
            {feedbackData.map(({ id, name, role, feedback, rating }) => (
              <motion.div
                key={id}
                className="p-4 md:w-1/2 w-full"
                initial={{ opacity: 0, y: 50 }} // Initial state off-screen
                animate={{ opacity: 1, y: 0 }} // Fade in and slide up
                transition={{ duration: 0.5, delay: id * 0.2 }} // Staggered animations
              >
                <div className="h-full bg-white shadow-lg p-8 rounded-xl hover:shadow-2xl transition-shadow">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    className="block w-6 h-6 text-gray-400 mb-4"
                    viewBox="0 0 975.036 975.036"
                  >
                    <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
                  </svg>
                  <p className="leading-relaxed mb-6 text-gray-600">{feedback}</p>

                  {/* Star Rating */}
                  <div className="flex mb-4">
                    {[...Array(5)].map((_, index) => (
                      <FaStar
                        key={index}
                        className={`text-yellow-500 ${index < rating ? "fill-current" : "text-gray-300"}`}
                        size={20}
                      />
                    ))}
                  </div>

                  <div className="inline-flex items-center">
                    <Image
                      width={200}
                      height={200}
                      alt="testimonial"
                      src={LogoImg1}
                      className="w-16 h-16 rounded-full flex-shrink-0 object-cover object-center border-2 border-gray-300"
                    />
                    <div className="flex-grow flex flex-col pl-4">
                      <span className="title-font font-medium text-gray-900 text-lg">
                        {name}
                      </span>
                      <span className="text-gray-500 text-sm">{role}</span>
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
