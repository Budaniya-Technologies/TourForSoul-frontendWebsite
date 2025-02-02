"use client";

import React from "react";
import { motion } from "framer-motion";

const hikingStyles = [
  { id: 1, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRShZK1BR_NCxLJLnzSJ4W2Nxb9lrF54Dd9FQ&s", title: "Mountain Trekking" },
  { id: 2, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9mxDMqQ7z9nia26qupE0mD-i2QHwPfk45EQ&s", title: "Forest Trails" },
  { id: 3, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiwNx4kFH0IpqZHG44453bOvQg1_FbhnncuQ&s", title: "Desert Hiking" },
  { id: 4, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQy-qBMvPyDExu9yTysyVz1zGb5RZon05SHjA&s", title: "Snow Hiking" },
  { id: 5, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSICfWGFFlAkmCA882aHareVSXYmYKCC3j-g&s", title: "Lakeside Trails" },
  { id: 6, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCyPuxQOFZ-qigz6KQoaICmImkcEWexq7y1Q&s", title: "Jungle Adventure" },
];

const FeaturedCitiesHomePage = () => {
  return (
    <div className="p-8 text-center">
      <motion.h2
        className="text-5xl font-bold text-blue-600 mb-8 border-b-4 border-yellow-400 inline-block pb-2"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Choose Your Hiking Style
      </motion.h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {hikingStyles.map((hike) => (
          <motion.div
            key={hike.id}
            className="relative rounded-full overflow-hidden shadow-lg cursor-pointer"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            {/* ✅ Added rounded-lg to images */}
            <img src={hike.image} alt={hike.title} className="w-full h-56 object-cover rounded-full" />
            <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center text-white text-lg font-semibold opacity-0 hover:opacity-100 transition-opacity duration-300">
              {hike.title}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedCitiesHomePage;
