import React from "react";
import { motion } from "framer-motion";
import FeaturedCitiesElement from "./FeaturedCitiesElement";

function FeaturedCitiesHomePage() {
  return (
    <div className="py-16">
      <h1 className="text-3xl text-center font-extrabold mb-12 tracking-wide">
        Choose Your Hiking Style
      </h1>
      <div className="flex flex-wrap justify-center gap-8 px-4 z-0">
        {/* Winter Adventure Card */}
        <motion.div
          className="w-full sm:w-1/3 md:w-1/4 lg:w-1/5 transform transition-transform hover:scale-105 hover:shadow-2xl rounded-lg overflow-hidden bg-gradient-to-r from-blue-500 to-teal-500 border-4 border-blue-700"
          whileHover={{
            x: [0, -10, 10, 0],  // Move left-right
            y: [0, -10, 10, 0],  // Move top-bottom
            rotateY: 10,  // Add a slight 3D effect
            scale: 1.05, // Slight scaling
          }}
          whileTap={{ scale: 0.95 }}
          transition={{ duration: 0.4 }}
        >
          <FeaturedCitiesElement
            StyleName="Winter"
            StylePhoto="https://images.pexels.com/photos/872498/pexels-photo-872498.jpeg?auto=compress&cs=tinysrgb&w=600"
            className="object-cover w-full h-64 rounded-t-lg"
          />
          <p className="text-center text-2xl font-semibold text-white mt-4">Winter Adventures</p>
        </motion.div>

        {/* Summer Escapades Card */}
        <motion.div
          className="w-full sm:w-1/3 md:w-1/4 lg:w-1/5 transform transition-transform hover:scale-105 hover:shadow-2xl rounded-lg overflow-hidden bg-gradient-to-r from-yellow-500 to-red-500 border-4 border-yellow-700"
          whileHover={{
            x: [0, 10, -10, 0], // Move left-right
            y: [0, 10, -10, 0], // Move top-bottom
            rotateY: -10, // Slight reverse 3D effect
            scale: 1.05, // Slight scaling
          }}
          whileTap={{ scale: 0.95 }}
          transition={{ duration: 0.4 }}
        >
          <FeaturedCitiesElement
            StyleName="Summer"
            StylePhoto="https://images.pexels.com/photos/3278939/pexels-photo-3278939.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1s"
            className="object-cover w-full h-64 rounded-t-lg"
          />
          <p className="text-center text-2xl font-semibold text-white mt-4">Summer Escapades</p>
        </motion.div>

        {/* Rainy Journeys Card */}
        <motion.div
          className="w-full sm:w-1/3 md:w-1/4 lg:w-1/5 transform transition-transform hover:scale-105 hover:shadow-2xl rounded-lg overflow-hidden bg-gradient-to-r from-green-500 to-blue-500 border-4 border-green-700"
          whileHover={{
            x: [0, 10, -10, 0], // Move left-right
            y: [0, -15, 15, 0], // Move up-down with more variation
            rotateY: 15, // Slight reverse 3D effect
            scale: 1.05, // Slight scaling
          }}
          whileTap={{ scale: 0.95 }}
          transition={{ duration: 0.4 }}
        >
          <FeaturedCitiesElement
            StyleName="Rainy"
            StylePhoto="https://images.pexels.com/photos/12909943/pexels-photo-12909943.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            className="object-cover w-full h-64 rounded-t-lg"
          />
          <p className="text-center text-2xl font-semibold text-white mt-4">Rainy Journeys</p>
        </motion.div>
      </div>
    </div>
  );
}

export default FeaturedCitiesHomePage;
