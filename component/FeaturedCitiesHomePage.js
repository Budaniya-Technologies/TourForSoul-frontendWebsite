import React from "react";
import { motion } from "framer-motion";
import FeaturedCitiesElement from "./FeaturedCitiesElement";

function FeaturedCitiesHomePage() {
  return (
    <div className="py-16 bg-gray-100 dark:bg-gray-900">
      <h1 className="text-4xl text-center font-extrabold mb-12 tracking-wide text-gray-900 dark:text-gray-100">
        Choose Your Hiking Style
      </h1>
      <div className="flex flex-wrap justify-center gap-10 px-6">
        {/* Winter Adventure Card */}
        <motion.div
          className="w-80 bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden transform transition-all hover:scale-105 hover:shadow-2xl"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          transition={{ duration: 0.3 }}
        >
          <FeaturedCitiesElement
            StyleName="Winter"
            StylePhoto="https://images.pexels.com/photos/872498/pexels-photo-872498.jpeg?auto=compress&cs=tinysrgb&w=600"
            className="object-cover w-full h-64 rounded-t-2xl"
          />
          <div className="p-6 text-center">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">Winter Adventures</h2>
          </div>
        </motion.div>

        {/* Summer Escapades Card */}
        <motion.div
          className="w-80 bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden transform transition-all hover:scale-105 hover:shadow-2xl"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          transition={{ duration: 0.3 }}
        >
          <FeaturedCitiesElement
            StyleName="Summer"
            StylePhoto="https://images.pexels.com/photos/3278939/pexels-photo-3278939.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1s"
            className="object-cover w-full h-64 rounded-t-2xl"
          />
          <div className="p-6 text-center">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">Summer Escapades</h2>
          </div>
        </motion.div>

        {/* Rainy Journeys Card */}
        <motion.div
          className="w-80 bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden transform transition-all hover:scale-105 hover:shadow-2xl"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          transition={{ duration: 0.3 }}
        >
          <FeaturedCitiesElement
            StyleName="Rainy"
            StylePhoto="https://images.pexels.com/photos/12909943/pexels-photo-12909943.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            className="object-cover w-full h-64 rounded-t-2xl"
          />
          <div className="p-6 text-center">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">Rainy Journeys</h2>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default FeaturedCitiesHomePage;
