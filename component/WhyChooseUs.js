import React from "react";
import { BsTrophyFill } from "react-icons/bs";
import { BiSolidLike } from "react-icons/bi";
import { GrCertificate } from "react-icons/gr";
import { GiMeshNetwork, GiOnTarget, GiLifeSupport } from "react-icons/gi";

function WhyChooseUs() {
  return (
    <div className="relative bg-[url('/img11.jpg')] bg-cover bg-center bg-fixed min-h-screen px-6 py-16 sm:px-12 md:px-20">
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black opacity-50"></div>

      <style>
        {`
          @keyframes bubbleEffect {
            0% { transform: translateY(0px); }
            50% { transform: translateY(-10px); }
            100% { transform: translateY(0px); }
          }

          .bubble-card {
            animation: bubbleEffect 3s infinite ease-in-out;
          }

          .bubble-card:nth-child(1) { animation-delay: 0s; }
          .bubble-card:nth-child(2) { animation-delay: 0.5s; }
          .bubble-card:nth-child(3) { animation-delay: 1s; }
          .bubble-card:nth-child(4) { animation-delay: 1.5s; }
          .bubble-card:nth-child(5) { animation-delay: 2s; }
          .bubble-card:nth-child(6) { animation-delay: 2.5s; }
        `}
      </style>

      {/* Content Wrapper */}
      <div className="relative z-10 text-center text-white">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 border-b-4 border-yellow-400 inline-block pb-2">
          Why Choose Us?
        </h1>
        <p className="text-base sm:text-lg md:text-xl mb-8 max-w-3xl mx-auto">
          Trusted by 50,000+ trekkers for seamless, expert-guided adventures and premium gear.
        </p>
      </div>

      {/* Feature Cards */}
      <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {[
          {
            icon: <BsTrophyFill className="text-3xl md:text-4xl text-white" />,
            title: "Award Winning",
            desc: "4.7 stars from 1,000+ reviews",
            color: "bg-yellow-500",
          },
          {
            icon: <GrCertificate className="text-3xl md:text-4xl text-white" />,
            title: "Certified Guides",
            desc: "7+ years of trekking expertise",
            color: "bg-blue-600",
          },
          {
            icon: <GiMeshNetwork className="text-3xl md:text-4xl text-white" />,
            title: "Direct Bookings",
            desc: "No third-party fees",
            color: "bg-green-600",
          },
          {
            icon: <GiOnTarget className="text-3xl md:text-4xl text-white" />,
            title: "Expert Support",
            desc: "Trek leaders with certified expertise",
            color: "bg-red-600",
          },
          {
            icon: <BiSolidLike className="text-3xl md:text-4xl text-white" />,
            title: "Premium Gear",
            desc: "Quality tents, bags, and more",
            color: "bg-purple-600",
          },
          {
            icon: <GiLifeSupport className="text-3xl md:text-4xl text-white" />,
            title: "Full Insurance",
            desc: "Safety with personal insurance",
            color: "bg-teal-600",
          },
        ].map((item, index) => (
          <div
            key={index}
            className={`bubble-card flex flex-col items-center bg-white p-4 sm:p-6 rounded-xl shadow-md hover:scale-105 hover:shadow-lg transition-all duration-300 group`}
          >
            <div
              className={`mb-3 p-2 md:p-3 ${item.color} rounded-full shadow-md group-hover:shadow-xl transition-all duration-300`}
            >
              {item.icon}
            </div>
            <h2 className="text-xl md:text-2xl font-semibold text-gray-800 mb-2 group-hover:text-opacity-80 transition-all duration-300">
              {item.title}
            </h2>
            <p className="text-sm md:text-lg text-gray-600 group-hover:text-opacity-80 transition-all duration-300">
              {item.desc}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default WhyChooseUs;
