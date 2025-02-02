import React from "react";
import { BsTrophyFill } from "react-icons/bs";
import { BiSolidLike } from "react-icons/bi";
import { GrCertificate } from "react-icons/gr";
import { GiMeshNetwork, GiOnTarget, GiLifeSupport } from "react-icons/gi";

function WhyChooseUs() {
  return (
    <div className="bg-gradient-to-r from-green-100 via-purple-100 to-blue-200 p-20">
      <style>
        {`
          @keyframes bubbleEffect {
            0% {
              transform: translateY(0px);
            }
            50% {
              transform: translateY(-10px);
            }
            100% {
              transform: translateY(0px);
            }
          }

          .bubble-cards {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 16px;
          }

          .bubble-card {
            animation: bubbleEffect 3s infinite;
            animation-timing-function: ease-in-out;
          }

          .bubble-card:nth-child(1) {
            animation-delay: 0s;
          }

          .bubble-card:nth-child(2) {
            animation-delay: 0.5s;
          }

          .bubble-card:nth-child(3) {
            animation-delay: 1s;
          }

          .bubble-card:nth-child(4) {
            animation-delay: 1.5s;
          }

          .bubble-card:nth-child(5) {
            animation-delay: 2s;
          }

          .bubble-card:nth-child(6) {
            animation-delay: 2.5s;
          }

          @media (max-width: 768px) {
            .bubble-cards {
              grid-template-columns: repeat(1, 1fr);
            }
          }
        `}
      </style>

      <div className="lg:w-3/6 md:w-9/12 m-auto text-center">
        <h1 className="text-5xl font-bold text-blue-600 mb-8 border-b-4 border-yellow-400 inline-block pb-2">Why Choose Us?</h1>
        <p className="text-lg text-gray-600 mb-8">
          Trusted by 50,000+ trekkers for seamless, expert-guided adventures and premium gear.
        </p>
      </div>

      <div className="bubble-cards">
        {[{
          icon: <BsTrophyFill className="text-4xl text-white" />, title: "Award Winning", desc: "4.7 stars from 1,000+ reviews", color: "bg-yellow-500"
        }, {
          icon: <GrCertificate className="text-4xl text-white" />, title: "Certified Guides", desc: "7+ years of trekking expertise", color: "bg-blue-600"
        }, {
          icon: <GiMeshNetwork className="text-4xl text-white" />, title: "Direct Bookings", desc: "No third-party fees", color: "bg-green-600"
        }, {
          icon: <GiOnTarget className="text-4xl text-white" />, title: "Expert Support", desc: "Trek leaders with certified expertise", color: "bg-red-600"
        }, {
          icon: <BiSolidLike className="text-4xl text-white" />, title: "Premium Gear", desc: "Quality tents, bags, and more", color: "bg-purple-600"
        }, {
          icon: <GiLifeSupport className="text-4xl text-white" />, title: "Full Insurance", desc: "Safety with personal insurance", color: "bg-teal-600"
        }].map((item, index) => (
          <div key={index} className={`bubble-card flex flex-col items-center bg-white p-6 rounded-xl shadow-md hover:scale-105 hover:shadow-lg transition-all duration-300 group`}>
            <div className={`mb-4 p-3 ${item.color} rounded-full shadow-md group-hover:shadow-xl transition-all duration-300`}>
              {item.icon}
            </div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-2 group-hover:text-opacity-80 transition-all duration-300">
              {item.title}
            </h2>
            <p className="text-lg text-gray-600 group-hover:text-opacity-80 transition-all duration-300">
              {item.desc}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default WhyChooseUs;