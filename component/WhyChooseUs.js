import React from "react";
import { BsTrophyFill } from "react-icons/bs";
import { BiSolidLike } from "react-icons/bi";
import { GrCertificate } from "react-icons/gr";
import { GiMeshNetwork, GiOnTarget, GiLifeSupport } from "react-icons/gi";

function WhyChooseUs() {
  return (
    <div className="bg-gradient-to-r from-green-100 via-purple-100 to-blue-200 py-16">
      <div className="lg:w-3/6 md:w-9/12 m-auto text-center">
        <h1 className="text-4xl font-semibold text-gray-800 mb-6">Why Choose Us?</h1>
        <p className="text-lg text-gray-600 mb-8">
          Trusted by 50,000+ trekkers for seamless, expert-guided adventures and premium gear.
        </p>
      </div>
      <div className="w-4/5 m-auto grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-8">
        {/* Card 1 */}
        <div className="flex flex-col items-center bg-white p-6 rounded-xl shadow-md hover:scale-105 hover:shadow-lg hover:translate-y-1 transition-all duration-300 group">
          <div className="mb-4 p-3 bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 rounded-full shadow-md group-hover:shadow-xl transition-all duration-300">
            <BsTrophyFill className="text-4xl text-white group-hover:text-yellow-100 transition-all duration-300" />
          </div>
          <h2 className="text-2xl font-semibold text-gray-800 mb-2 group-hover:text-yellow-500 transition-all duration-300">
            Award Winning
          </h2>
          <p className="text-lg text-gray-600 group-hover:text-yellow-400 transition-all duration-300">
            4.7 stars from 1,000+ reviews
          </p>
        </div>

        {/* Card 2 */}
        <div className="flex flex-col items-center bg-white p-6 rounded-xl shadow-md hover:scale-105 hover:shadow-lg hover:translate-y-1 transition-all duration-300 group">
          <div className="mb-4 p-3 bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 rounded-full shadow-md group-hover:shadow-xl transition-all duration-300">
            <GrCertificate className="text-4xl text-white group-hover:text-blue-100 transition-all duration-300" />
          </div>
          <h2 className="text-2xl font-semibold text-gray-800 mb-2 group-hover:text-blue-500 transition-all duration-300">
            Certified Guides
          </h2>
          <p className="text-lg text-gray-600 group-hover:text-blue-400 transition-all duration-300">
            7+ years of trekking expertise
          </p>
        </div>

        {/* Card 3 */}
        <div className="flex flex-col items-center bg-white p-6 rounded-xl shadow-md hover:scale-105 hover:shadow-lg hover:translate-y-1 transition-all duration-300 group">
          <div className="mb-4 p-3 bg-gradient-to-r from-green-500 via-green-600 to-green-700 rounded-full shadow-md group-hover:shadow-xl transition-all duration-300">
            <GiMeshNetwork className="text-4xl text-white group-hover:text-green-100 transition-all duration-300" />
          </div>
          <h2 className="text-2xl font-semibold text-gray-800 mb-2 group-hover:text-green-500 transition-all duration-300">
            Direct Bookings
          </h2>
          <p className="text-lg text-gray-600 group-hover:text-green-400 transition-all duration-300">
            No third-party fees
          </p>
        </div>

        {/* Card 4 */}
        <div className="flex flex-col items-center bg-white p-6 rounded-xl shadow-md hover:scale-105 hover:shadow-lg hover:translate-y-1 transition-all duration-300 group">
          <div className="mb-4 p-3 bg-gradient-to-r from-red-500 via-red-600 to-red-700 rounded-full shadow-md group-hover:shadow-xl transition-all duration-300">
            <GiOnTarget className="text-4xl text-white group-hover:text-red-100 transition-all duration-300" />
          </div>
          <h2 className="text-2xl font-semibold text-gray-800 mb-2 group-hover:text-red-500 transition-all duration-300">
            Expert Support
          </h2>
          <p className="text-lg text-gray-600 group-hover:text-red-400 transition-all duration-300">
            Trek leaders with certified expertise
          </p>
        </div>

        {/* Card 5 */}
        <div className="flex flex-col items-center bg-white p-6 rounded-xl shadow-md hover:scale-105 hover:shadow-lg hover:translate-y-1 transition-all duration-300 group">
          <div className="mb-4 p-3 bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 rounded-full shadow-md group-hover:shadow-xl transition-all duration-300">
            <BiSolidLike className="text-4xl text-white group-hover:text-purple-100 transition-all duration-300" />
          </div>
          <h2 className="text-2xl font-semibold text-gray-800 mb-2 group-hover:text-purple-500 transition-all duration-300">
            Premium Gear
          </h2>
          <p className="text-lg text-gray-600 group-hover:text-purple-400 transition-all duration-300">
            Quality tents, bags, and more
          </p>
        </div>

        {/* Card 6 */}
        <div className="flex flex-col items-center bg-white p-6 rounded-xl shadow-md hover:scale-105 hover:shadow-lg hover:translate-y-1 transition-all duration-300 group">
          <div className="mb-4 p-3 bg-gradient-to-r from-teal-500 via-teal-600 to-teal-700 rounded-full shadow-md group-hover:shadow-xl transition-all duration-300">
            <GiLifeSupport className="text-4xl text-white group-hover:text-teal-100 transition-all duration-300" />
          </div>
          <h2 className="text-2xl font-semibold text-gray-800 mb-2 group-hover:text-teal-500 transition-all duration-300">
            Full Insurance
          </h2>
          <p className="text-lg text-gray-600 group-hover:text-teal-400 transition-all duration-300">
            Safety with personal insurance
          </p>
        </div>
      </div>
    </div>
  );
}

export default WhyChooseUs;
