"use client";

import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const hikingStyles = [
  {
    id: 1,
    image:
      "https://media.gettyimages.com/id/1157061825/photo/group-of-friends-camping-at-mountain-peak-in-the-serra-dos-org%C3%A3os-national-park-rio-de.jpg?s=612x612&w=0&k=20&c=UXwC9jHtXHYgoUKSZZfoZlhkIjFemJkZVQP1d1slZbU=",
    title: "Mountain Trekking",
    description:
      "Mountain trekking is one of the most exhilarating outdoor adventures, offering a perfect blend of challenge, beauty, and nature. Trekking through high-altitude mountain trails allows adventurers to witness breathtaking landscapes, snow-capped peaks, lush valleys, and stunning sunrises. The journey often requires endurance and physical fitness, as the trails can be steep and rugged. However, the sense of accomplishment upon reaching the summit is unparalleled. Mountain trekking also provides opportunities to experience diverse wildlife, alpine flora, and local cultures of mountain-dwelling communities. Whether it's the Himalayas, the Andes, or the Alps, each trekking destination has its own unique charm. Many treks require acclimatization to avoid altitude sickness, and proper gear such as sturdy boots, layered clothing, and trekking poles are essential. Some famous mountain treks include Everest Base Camp in Nepal, Kilimanjaro in Tanzania, and the Inca Trail in Peru. The journey often includes camping under the stars or staying in remote mountain lodges, adding to the adventure.",
  },
  {
    id: 2,
    image:
      "https://www.conservationindia.org/wp-content/files_mf/1315903177khandaltigerjunta2sml.jpg",
    title: "Forest Trails",
    description:
      "Forest trails offer a peaceful and immersive hiking experience, surrounded by lush greenery, towering trees, and diverse wildlife. Unlike mountain trekking, which focuses on elevation, forest hiking takes you through dense woods, winding paths, and scenic landscapes. The fresh aroma of pine, the rustling of leaves, and the chirping of birds create a serene ambiance that is both calming and rejuvenating. Walking through a forest trail allows hikers to encounter hidden waterfalls, crystal-clear streams, and unique flora and fauna. The trails can be easy or challenging, depending on the terrain, but they all offer a sense of tranquility and connection with nature. Forest hikes are ideal for nature lovers, photographers, and bird watchers, as many forests are home to rare species. Whether it’s the Amazon rainforest, the Black Forest in Germany, or the Great Smoky Mountains in the U.S., every forest offers a unique ecosystem waiting to be explored.",
  },
  {
    id: 3,
    image:
      "https://www.vacationtripindia.com/wp-content/uploads/Famous-Tourist-Places-In-Rajasthan-During-Winter.webp",
    title: "Desert Hiking",
    description:
      "Desert hiking is a unique and thrilling experience that takes adventurers through vast landscapes of golden dunes, rugged canyons, and rocky outcrops. Unlike traditional forest or mountain hikes, desert hikes challenge hikers with extreme temperatures, arid conditions, and limited water sources. However, the reward is an unparalleled view of some of the most stunning landscapes on Earth. The shifting sand dunes, towering rock formations, and surreal sunsets make desert hiking a photographer’s dream. Some famous desert hikes include the Wadi Rum in Jordan, the Sahara Desert in Africa, and the Grand Canyon in the U.S. Hikers should be well-prepared with sun protection, plenty of water, and proper clothing to combat the heat during the day and the cold at night. Wildlife in deserts is equally fascinating, with creatures like camels, lizards, and even rare fox species making their homes in these harsh conditions. Despite its challenges, desert hiking provides solitude, peace, and an unmatched sense of adventure. The wide-open spaces and stunning night skies full of stars make it a surreal experience. ",
  },
  {
    id: 4,
    image:
      "https://images.deccanherald.com/deccanherald%2Fimport%2Fsites%2Fdh%2Ffiles%2Farticleimages%2F2022%2F01%2F02%2Fpti12262021000088b-1-1067149-1641121335.jpg?auto=format%2Ccompress&fmt=webp&fit=max&format=webp&q=70&w=400&dpr=2",
    title: "Snow Hiking",
    description:
      "Snow hiking is a magical experience that transforms ordinary trails into winter wonderlands. Whether trekking through snow-covered forests, scaling icy mountains, or walking across frozen lakes, snow hiking offers breathtaking views and a peaceful escape. The crisp, cold air and soft crunch of snow beneath the boots create a calming atmosphere, while the sight of icicles hanging from trees and frozen waterfalls adds to the beauty. Some of the best snow hiking destinations include the Swiss Alps, the Canadian Rockies, and Japan’s Hokkaido region. Proper preparation is essential, as snow hiking presents unique challenges such as slippery terrain, freezing temperatures, and the risk of avalanches. Essential gear includes insulated boots, crampons, trekking poles, and layered clothing. Snow hiking is not just about the scenery—it’s also about experiencing nature in its most pristine form. It offers opportunities to spot winter wildlife such as deer, foxes, and snow hares.",
  },
  {
    id: 5,
    image:
      "https://www.beautifulworld.com/wp-content/uploads/2017/07/lake-dal-shikava-boat.jpg",
    title: "Lakeside Trails",
    description:
      "Lakeside trails offer some of the most scenic and relaxing hikes, providing a perfect blend of water, forest, and mountains. Walking along a tranquil lake allows hikers to experience stunning reflections of the surrounding landscapes, creating picture-perfect views. Whether it’s the crystal-clear waters of Lake Tahoe, the deep blue beauty of Canada’s Moraine Lake, or the mystical charm of Plitvice Lakes in Croatia, each destination offers its own unique magic. Lakeside trails are generally less strenuous than mountain treks, making them accessible to hikers of all skill levels. Many trails include wooden boardwalks, gentle slopes, and shaded paths, perfect for a leisurely walk or an extended day hike. Wildlife such as ducks, swans, and even moose can often be spotted near lakes. During autumn, the trails are even more enchanting as the colorful foliage reflects on the water’s surface. Some lakeside trails also provide opportunities for kayaking, fishing, or even swimming in warmer months.",
  },
  {
    id: 6,
    image:
      "https://getupandgo.in/wp-content/uploads/2014/08/Advve1-1040x530.jpg",
    title: "Jungle Adventure",
    description:
      "Jungle adventure hiking is an adrenaline-filled journey into dense, tropical rainforests teeming with life. Unlike other hikes, jungle treks take hikers deep into lush greenery, where exotic wildlife, towering trees, and hidden waterfalls await. The humid climate and dense vegetation create an intense yet rewarding experience. Famous jungle hiking destinations include the Amazon Rainforest, Costa Rica’s Monteverde Cloud Forest, and Borneo’s jungles. Along the way, hikers may encounter rare animals such as monkeys, toucans, jaguars, and colorful frogs. The trails can be muddy, slippery, and full of natural obstacles like fallen logs and steep inclines, making the adventure even more exciting. Jungle hiking is also rich in cultural experiences, as many treks pass through indigenous villages where travelers can learn about local traditions. The sound of chirping birds, rustling leaves, and distant waterfalls adds to the immersive experience.",
  },
];

const FeaturedCitiesHomePage = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? hikingStyles.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === hikingStyles.length - 1 ? 0 : prev + 1));
  };

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
            key={hikingStyles[currentIndex].id}
            className="w-full md:w-1/2 rounded-lg overflow-hidden shadow-lg"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            transition={{ duration: 0.5 }}
          >
            <img
              src={hikingStyles[currentIndex].image}
              alt={hikingStyles[currentIndex].title}
              className="w-full h-60 md:h-[500px] object-cover rounded-lg"
            />
          </motion.div>
        </AnimatePresence>

        {/* Right Side - Content */}
        <motion.div
          key={hikingStyles[currentIndex].id + "-text"}
          className="w-full md:w-1/2 text-center md:text-left"
          initial={{ opacity: 0.8, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl md:text-4xl font-bold text-blue-600 mb-3">
            {hikingStyles[currentIndex].title}
          </h2>
          <p className="text-gray-700 text-lg">
            {hikingStyles[currentIndex].description}
          </p>

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
