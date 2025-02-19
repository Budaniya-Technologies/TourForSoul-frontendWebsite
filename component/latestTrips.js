"use client";

import React, { useEffect, useRef } from "react";

const latestTrips = [
  { id: 1, image: "https://images.saymedia-content.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cq_auto:eco%2Cw_1200/MTk4MDE5NTIyNzQ4MjI4NzY5/family-vacation-quotes-and-caption-ideas.png", title: "Maldives Beach" },
  { id: 2, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXURCgpZ51RNRdCb9hosYSM2fBBRokg3hvJmfHyJJDbMcwC8WVQ3AbpSe1xz8Ht5OClPA&usqp=CAU", title: "Eiffel Tower, Paris" },
  { id: 3, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4ycLAxq72ywsJIKtH0pDFACtp9XrhO2yvHw&s", title: "Mountain Adventure" },
  { id: 4, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXURCgpZ51RNRdCb9hosYSM2fBBRokg3hvJmfHyJJDbMcwC8WVQ3AbpSe1xz8Ht5OClPA&usqp=CAU", title: "New York City" },
];

const LatestTrips = () => {
  const scrollRef = useRef(null);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    let scrollAmount = 0;
    const speed = 2; // Adjust scrolling speed

    const scrollInterval = setInterval(() => {
      if (scrollContainer) {
        scrollAmount += speed;
        if (scrollAmount >= scrollContainer.scrollWidth / 2) {
          scrollContainer.scrollLeft = 0;
          scrollAmount = 0;
        } else {
          scrollContainer.scrollLeft += speed;
        }
      }
    }, 50);

    return () => clearInterval(scrollInterval);
  }, []);

  return (
    <div className="p-8 text-center">
      <h2 className="text-5xl font-bold text-blue-600 mb-8 border-b-4 border-yellow-400 inline-block pb-2">
        Latest Trip Pictures
      </h2>
      <div className="overflow-hidden relative" ref={scrollRef}>
        <div className="flex space-x-6 transition-transform scroll-smooth whitespace-nowrap">
          {latestTrips.concat(latestTrips).map((trip, index) => (
            <div
              key={index}
              className="relative min-w-[300px] h-56 rounded-lg overflow-hidden shadow-lg cursor-pointer"
            >
              <img
                src={trip.image}
                alt={trip.title}
                className="w-full h-full object-cover rounded-lg"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center text-white text-lg font-semibold opacity-0 hover:opacity-100 transition-opacity duration-300">
                {trip.title}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LatestTrips;
