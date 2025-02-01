"use client";

import React from "react";
import { motion } from "framer-motion";

const latestTrips = [
  { id: 1, image: "https://images.saymedia-content.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cq_auto:eco%2Cw_1200/MTk4MDE5NTIyNzQ4MjI4NzY5/family-vacation-quotes-and-caption-ideas.png", title: "Maldives Beach" },
  { id: 2, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXURCgpZ51RNRdCb9hosYSM2fBBRokg3hvJmfHyJJDbMcwC8WVQ3AbpSe1xz8Ht5OClPA&usqp=CAU", title: "Eiffel Tower, Paris" },
  { id: 3, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4ycLAxq72ywsJIKtH0pDFACtp9XrhO2yvHw&s", title: "Mountain Adventure" },
  { id: 4, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXURCgpZ51RNRdCb9hosYSM2fBBRokg3hvJmfHyJJDbMcwC8WVQ3AbpSe1xz8Ht5OClPA&usqp=CAU", title: "New York City" },
  { id: 5, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4ycLAxq72ywsJIKtH0pDFACtp9XrhO2yvHw&s", title: "Kyoto, Japan" },
  { id: 6, image: "https://images.saymedia-content.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cq_auto:eco%2Cw_1200/MTk4MDE5NTIyNzQ4MjI4NzY5/family-vacation-quotes-and-caption-ideas.png", title: "Dubai Desert Safari" },
];

const LatestTrips = () => {
  return (
    <div className="p-8 text-center">
      <motion.h2
        className="text-4xl font-bold text-blue-600 mb-8"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Latest Trip Pictures
      </motion.h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {latestTrips.map((trip) => (
          <motion.div
            key={trip.id}
            className="relative rounded-lg overflow-hidden shadow-lg cursor-pointer"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <img src={trip.image} alt={trip.title} className="w-full h-56 object-cover" />
            <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center text-white text-lg font-semibold opacity-0 hover:opacity-100 transition-opacity duration-300">
              {trip.title}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default LatestTrips;
