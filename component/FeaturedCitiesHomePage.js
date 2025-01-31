import React from "react";
import FeaturedCitiesElement from "./FeaturedCitiesElement";

function FeaturedCitiesHomePage() {
  return (
    <div className="py-16 ">
      <h1 className="text-3xl text-center font-extrabold mb-12 tracking-wide">
        Choose Your Hiking Style
      </h1>
      <div className="flex flex-wrap justify-center gap-8 px-4 z-0">
        <div className="w-full sm:w-1/3 md:w-1/4 lg:w-1/5 transform transition-transform hover:scale-105 hover:shadow-2xl rounded-lg overflow-hidden bg-gradient-to-r from-blue-500 to-teal-500 border-4 border-blue-700">
          <FeaturedCitiesElement 
            StyleName="Winter" 
            StylePhoto="https://images.pexels.com/photos/872498/pexels-photo-872498.jpeg?auto=compress&cs=tinysrgb&w=600" 
            className="object-cover w-full h-64 rounded-t-lg" // Cover the container
          />
          <p className="text-center text-2xl font-semibold text-white mt-4">Winter Adventures</p>
        </div>
        
        <div className="w-full sm:w-1/3 md:w-1/4 lg:w-1/5 transform transition-transform hover:scale-105 hover:shadow-2xl rounded-lg overflow-hidden bg-gradient-to-r from-yellow-500 to-red-500 border-4 border-yellow-700">
          <FeaturedCitiesElement 
            StyleName="Summer" 
            StylePhoto="https://images.pexels.com/photos/3278939/pexels-photo-3278939.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1s" 
            className="object-cover w-full h-64 rounded-t-lg" // Cover the container
          />
          <p className="text-center text-2xl font-semibold text-white mt-4">Summer Escapades</p>
        </div>
        
        <div className="w-full sm:w-1/3 md:w-1/4 lg:w-1/5 transform transition-transform hover:scale-105 hover:shadow-2xl rounded-lg overflow-hidden bg-gradient-to-r from-green-500 to-blue-500 border-4 border-green-700">
          <FeaturedCitiesElement 
            StyleName="Rainy" 
            StylePhoto="https://images.pexels.com/photos/12909943/pexels-photo-12909943.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
            className="object-cover w-full h-64 rounded-t-lg" // Cover the container
          />
          <p className="text-center text-2xl font-semibold text-white mt-4">Rainy Journeys</p>
        </div>
      </div>
    </div>
  );
}

export default FeaturedCitiesHomePage;
