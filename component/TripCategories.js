"use client";

import React, { useState } from "react";
import {
  FaHeart,
  FaPlane,
  FaHome,
  FaShoppingBag,
  FaUsers,
  FaMountain,
  FaMapMarkerAlt,
  FaStar,
  FaClock,
  FaTimes,
} from "react-icons/fa";
import { motion } from "framer-motion";

const imageUrls = {
  honeymoon:
    "https://media.istockphoto.com/id/506598655/photo/couple-on-a-beach-jetty-at-maldives.jpg?s=612x612&w=0&k=20&c=UJha8UU51ThBgH151slXPie_fCsfvnQWYxnLOcRmUkw=",
  international:
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4ycLAxq72ywsJIKtH0pDFACtp9XrhO2yvHw&s",
  domestic:
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOmkWKcsM1rDs5H7iKO7DgV8nobC9Dr2CNvA&s",
  luxury:
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXURCgpZ51RNRdCb9hosYSM2fBBRokg3hvJmfHyJJDbMcwC8WVQ3AbpSe1xz8Ht5OClPA&usqp=CAU",
  family:
    "https://images.saymedia-content.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cq_auto:eco%2Cw_1200/MTk4MDE5NTIyNzQ4MjI4NzY5/family-vacation-quotes-and-caption-ideas.png",
  adventure:
    "https://static.toiimg.com/thumb/66461463/adventure-tourism.jpg?width=1200&height=900",
};

const tripData = {
  honeymoon: {
    title: "Honeymoon Paradise",
    location: "Maldives",
    price: "$2999",
    rating: 5,
    duration: "5 Days / 4 Nights",
  },
  international: {
    title: "World Explorer",
    location: "Europe",
    price: "$3999",
    rating: 4.8,
    duration: "10 Days / 9 Nights",
  },
  domestic: {
    title: "Local Getaways",
    location: "India",
    price: "$999",
    rating: 4.5,
    duration: "4 Days / 3 Nights",
  },
  luxury: {
    title: "Ultimate Luxury",
    location: "Dubai",
    price: "$4999",
    rating: 5,
    duration: "7 Days / 6 Nights",
  },
  family: {
    title: "Family Fun",
    location: "Thailand",
    price: "$2499",
    rating: 4.7,
    duration: "6 Days / 5 Nights",
  },
  adventure: {
    title: "Extreme Adventures",
    location: "Himalayas",
    price: "$1999",
    rating: 4.6,
    duration: "8 Days / 7 Nights",
  },
};

const TripCategories = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);

  const tripTypes = [
    { title: "Honeymoon", icon: <FaHeart size={28} />, category: "honeymoon" },
    {
      title: "International",
      icon: <FaPlane size={28} />,
      category: "international",
    },
    { title: "Domestic", icon: <FaHome size={28} />, category: "domestic" },
    { title: "Luxury", icon: <FaShoppingBag size={28} />, category: "luxury" },
    { title: "Family", icon: <FaUsers size={28} />, category: "family" },
    {
      title: "Adventure",
      icon: <FaMountain size={28} />,
      category: "adventure",
    },
  ];

  return (
    <div className="p-6 text-center">
      <motion.h2
        className="text-5xl font-bold text-blue-600 mb-8 border-b-4 border-yellow-400 inline-block pb-2"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Trip Categories
      </motion.h2>

      <div className="flex flex-wrap justify-center gap-8">
        {tripTypes.map((trip, index) => (
          <motion.div
            key={index}
            className={`flex flex-col items-center text-center p-5 rounded-lg shadow-lg w-36 cursor-pointer transition transform hover:scale-110 ${
              selectedCategory === trip.category
                ? "bg-blue-600 text-white scale-110"
                : "bg-gray-100 hover:bg-blue-500 hover:text-white"
            }`}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.3 }}
            onClick={() =>
              setSelectedCategory(selectedCategory === trip.category ? null : trip.category)
            }
          >
            <div className="text-4xl mb-2">{trip.icon}</div>
            <h3 className="text-lg font-semibold">{trip.title}</h3>
          </motion.div>
        ))}
      </div>

      {selectedCategory && (
        <div className="relative flex flex-wrap justify-center mt-8">
          <button
            className="absolute top-0 right-0 bg-red-500 text-white p-2 rounded-full shadow-md hover:bg-red-600"
            onClick={() => setSelectedCategory(null)}
          >
            <FaTimes size={24} />
          </button>
          <TripCard category={selectedCategory} />
          <TripCard category={selectedCategory} />
          <TripCard category={selectedCategory} />
        </div>
      )}
    </div>
  );
};

const TripCard = ({ category }) => {
  if (!category) return null;

  const { title, location, price, rating, duration } = tripData[category];

  return (
    <motion.div
      className="w-[450px] bg-white shadow-xl rounded-lg p-6 mt-8 mx-auto border border-gray-200"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4 }}
    >
      <h2 className="text-3xl font-bold text-blue-600 text-center mb-4">
        {title}
      </h2>
      <div className="border border-gray-300 rounded-lg overflow-hidden">
        <img
          src={imageUrls[category]}
          alt={title}
          className="w-full h-60 object-cover"
        />
        <div className="p-4">
          <p className="flex items-center text-gray-700 text-lg font-semibold">
            <FaMapMarkerAlt className="text-red-500 mr-2" /> {location}
          </p>
          <div className="flex items-center text-yellow-500 text-xl my-2">
            {Array.from({ length: Math.floor(rating) }).map((_, index) => (
              <FaStar key={index} />
            ))}
            {rating % 1 !== 0 && <FaStar className="half-star" />}
            <span className="ml-2 text-gray-700 text-lg">({rating})</span>
          </div>
          <p className="text-gray-800 text-xl font-semibold">
            Package Price: <span className="text-green-600">{price}</span>
          </p>
          <p className="flex items-center text-gray-600 text-lg font-semibold mt-3">
            <FaClock className="text-blue-500 mr-2" /> {duration}
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default TripCategories;
