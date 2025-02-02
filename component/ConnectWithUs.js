import React from "react";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import GroupIcon from "@mui/icons-material/Group";
import CardTravelIcon from "@mui/icons-material/CardTravel";
import TravelExploreIcon from "@mui/icons-material/TravelExplore";

function ConnectWithUs() {
  return (
    <div className="bg-white py-12 px-5">
      <style>
        {`
          @keyframes rotate {
            0% {
              transform: rotate(0deg);
            }
            100% {
              transform: rotate(360deg);
            }
          }
        `}
      </style>
      <section className="text-gray-600">
      <div className="flex justify-center mb-8">
        <h2 className="text-5xl font-bold text-blue-600 border-b-4 border-yellow-400 pb-2 w-max">
          Our Service
        </h2>
      </div>

        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
            {/* Happy Users Box */}
            <div className="p-6 bg-gray-50 text-gray-900 rounded-lg shadow-md hover:shadow-lg transition-all duration-300">
              <div className="bg-purple-500 p-3 rounded-full inline-block relative">
                <PeopleAltIcon
                  style={{
                    fontSize: 40,
                    color: "white",
                    animation: "rotate 10s linear infinite", // Animation applied here
                  }}
                />
              </div>
              <h2 className="text-3xl font-bold mt-3">2.7K+</h2>
              <p className="text-sm mt-1 font-medium text-gray-600">Happy Users</p>
            </div>

            {/* Followers Box */}
            <div className="p-6 bg-gray-50 text-gray-900 rounded-lg shadow-md hover:shadow-lg transition-all duration-300">
              <div className="bg-green-500 p-3 rounded-full inline-block relative">
                <GroupIcon
                  style={{
                    fontSize: 40,
                    color: "white",
                    animation: "rotate 10s linear infinite", // Animation applied here
                  }}
                />
              </div>
              <h2 className="text-3xl font-bold mt-3">1.8K+</h2>
              <p className="text-sm mt-1 font-medium text-gray-600">Followers</p>
            </div>

            {/* Active Packages Box */}
            <div className="p-6 bg-gray-50 text-gray-900 rounded-lg shadow-md hover:shadow-lg transition-all duration-300">
              <div className="bg-blue-500 p-3 rounded-full inline-block relative">
                <CardTravelIcon
                  style={{
                    fontSize: 40,
                    color: "white",
                    animation: "rotate 10s linear infinite", // Animation applied here
                  }}
                />
              </div>
              <h2 className="text-3xl font-bold mt-3">35+</h2>
              <p className="text-sm mt-1 font-medium text-gray-600">Active Packages</p>
            </div>

            {/* Travel Partners Box */}
            <div className="p-6 bg-gray-50 text-gray-900 rounded-lg shadow-md hover:shadow-lg transition-all duration-300">
              <div className="bg-red-500 p-3 rounded-full inline-block relative">
                <TravelExploreIcon
                  style={{
                    fontSize: 40,
                    color: "white",
                    animation: "rotate 10s linear infinite", // Animation applied here
                  }}
                />
              </div>
              <h2 className="text-3xl font-bold mt-3">4+</h2>
              <p className="text-sm mt-1 font-medium text-gray-600">Travel Partners</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ConnectWithUs;
