"use client";

import React, { useEffect, useRef, useState } from "react";
import { apiGet } from "@/Utils/http";

const API_EndPoint = "apiAdmin/v1/trip-picture";
const ipURL = process.env.NEXT_PUBLIC_API_URL;
const bannerImg = `${ipURL.slice(0, ipURL.length - 1)}`;

const LatestTrips = () => {
  const [trips, setTrips] = useState([]);
  const scrollRef = useRef(null);

  useEffect(() => {
    const fetchTrips = async () => {
      try {
        const response = await apiGet(API_EndPoint);
        setTrips(response.data);
      } catch (error) {
        console.error("Error fetching trips:", error);
      }
    };

    fetchTrips();
  }, []);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    let scrollAmount = 0;
    const speed = 2;

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
  }, [trips]);

  return (
    <div className="p-8 text-center">
      <h2 className="text-5xl font-bold text-blue-600 mb-8 border-b-4 border-yellow-400 inline-block pb-2">
        Latest Trip Pictures
      </h2>
      <div className="overflow-hidden relative" ref={scrollRef}>
        <div className="flex space-x-6 transition-transform scroll-smooth whitespace-nowrap">
          {trips.concat(trips).map((trip, index) => (
            <div
              key={index}
              className="relative min-w-[300px] h-56 rounded-lg overflow-hidden shadow-lg cursor-pointer"
            >
              <img
                src={
                  trip.imageUrl?.startsWith("http")
                    ? trip.imageUrl
                    : `${bannerImg}${trip.imageUrl}`
                }
                alt={trip.name}
                className="w-full h-full object-cover rounded-lg"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center text-white text-lg font-semibold opacity-0 hover:opacity-100 transition-opacity duration-300">
                {trip.name}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LatestTrips;
