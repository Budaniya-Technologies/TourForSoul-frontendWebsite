"use client";

import React from "react";

const latestTrips = [
  { id: 1, image: "https://images.saymedia-content.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cq_auto:eco%2Cw_1200/MTk4MDE5NTIyNzQ4MjI4NzY5/family-vacation-quotes-and-caption-ideas.png", title: "Maldives Beach" },
  { id: 2, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXURCgpZ51RNRdCb9hosYSM2fBBRokg3hvJmfHyJJDbMcwC8WVQ3AbpSe1xz8Ht5OClPA&usqp=CAU", title: "Eiffel Tower, Paris" },
  { id: 3, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4ycLAxq72ywsJIKtH0pDFACtp9XrhO2yvHw&s", title: "Mountain Adventure" },
  { id: 4, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXURCgpZ51RNRdCb9hosYSM2fBBRokg3hvJmfHyJJDbMcwC8WVQ3AbpSe1xz8Ht5OClPA&usqp=CAU", title: "New York City" },
  { id: 5, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4ycLAxq72ywsJIKtH0pDFACtp9XrhO2yvHw&s", title: "Kyoto, Japan" },
  { id: 6, image: "https://images.saymedia-content.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cq_auto:eco%2Cw_1200/MTk4MDE5NTIyNzQ4MjI4NzY5/family-vacation-quotes-and-caption-ideas.png", title: "Dubai Desert Safari" },
  { id: 7, image: "https://images.saymedia-content.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cq_auto:eco%2Cw_1200/MTk4MDE5NTIyNzQ4MjI4NzY5/family-vacation-quotes-and-caption-ideas.png", title: "Maldives Beach" },
  { id: 8, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXURCgpZ51RNRdCb9hosYSM2fBBRokg3hvJmfHyJJDbMcwC8WVQ3AbpSe1xz8Ht5OClPA&usqp=CAU", title: "Eiffel Tower, Paris" },
  { id: 9, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4ycLAxq72ywsJIKtH0pDFACtp9XrhO2yvHw&s", title: "Mountain Adventure" },
  { id: 10, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXURCgpZ51RNRdCb9hosYSM2fBBRokg3hvJmfHyJJDbMcwC8WVQ3AbpSe1xz8Ht5OClPA&usqp=CAU", title: "New York City" },
  { id: 11, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4ycLAxq72ywsJIKtH0pDFACtp9XrhO2yvHw&s", title: "Kyoto, Japan" },
  { id: 12, image: "https://images.saymedia-content.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cq_auto:eco%2Cw_1200/MTk4MDE5NTIyNzQ4MjI4NzY5/family-vacation-quotes-and-caption-ideas.png", title: "Dubai Desert Safari" },
];

const LatestTrips = () => {
  return (
    <div className="p-8 text-center">
      <h2 className="text-5xl font-bold text-blue-600 mb-8 border-b-4 border-yellow-400 inline-block pb-2">
        Latest Trip Pictures
      </h2>

      <div className="overflow-hidden relative">
        <div className="flex space-x-6 transition-transform scroll-smooth scroll-whenever">
          {latestTrips.map((trip) => (
            <div
              key={trip.id}
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

      {/* Add styles inside the component */}
      <style jsx>{`
        .scroll-smooth {
          scroll-behavior: smooth;
        }

        .scroll-whenever {
          overflow-x: auto;
          white-space: nowrap;
          -webkit-overflow-scrolling: touch;
        }

        .scroll-whenever::-webkit-scrollbar {
          height: 6px;
        }

        .scroll-whenever::-webkit-scrollbar-thumb {
          background: #888;
          border-radius: 10px;
        }

        .scroll-whenever::-webkit-scrollbar-thumb:hover {
          background: #555;
        }
      `}</style>
    </div>
  );
};

export default LatestTrips;
