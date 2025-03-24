import React, { useEffect, useState, useRef } from "react";
import Image from "next/image";
import { BsTrophyFill } from "react-icons/bs";
import { BiSolidLike } from "react-icons/bi";
import { GrCertificate } from "react-icons/gr";
import { GiMeshNetwork, GiOnTarget, GiLifeSupport } from "react-icons/gi";
import { FaArrowRight } from "react-icons/fa";
import { useRouter } from "next/router";

function WhyChooseUs() {
  const router = useRouter();
  const [visible, setVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
        }
      },
      { threshold: 0.3 }
    );
    if (ref.current) {
      observer.observe(ref.current);
    }
    return () => observer.disconnect();
  }, []);

  return (
    <div className="relative bg-[url('/img11.jpg')] bg-cover bg-center bg-fixed min-h-screen px-4 py-12 sm:px-8 md:px-16">
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black opacity-50"></div>

      {/* Content Wrapper */}
      <div className="relative z-10 text-center text-white">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 border-b-4 border-yellow-400 inline-block pb-2">
          Why Choose Us?
        </h1>
        <p className="text-base sm:text-lg md:text-xl mb-4 max-w-3xl mx-auto">
          Trusted by 50,000+ trekkers for seamless, expert-guided adventures and premium gear.
        </p>
      </div>

      <div className="container mx-auto px-4 sm:px-8 md:px-12 lg:px-16">
        <div className="flex flex-col md:flex-row items-center gap-12">
          {/* Image Section */}
          <div
            ref={ref}
            className={`w-full md:w-1/2 transform transition-all duration-700 ${
              visible ? "opacity-100 scale-100" : "opacity-0 scale-95"
            }`}
          >
            <Image
              src="/thebagPacker-logo.png"
              alt="About TourForSoul"
              width={300}
              height={300}
              className="w-1/2 rounded-full mx-auto"
            />
          </div>

          {/* Text Section */}
          <div
            className={`w-full md:w-1/2 text-center md:text-left transition-all duration-700 ${
              visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
            }`}
          >
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 dark:text-white leading-tight">
              Discover <span className="text-blue-600">TourForSoul</span>
            </h2>
            <p className="mt-4 text-lg text-gray-700 dark:text-gray-300">
              Welcome to <b>TourForSoul</b>, your gateway to{" "}
              <i>life-changing travel experiences</i>. We curate journeys that blend adventure, culture, and spirituality, ensuring that each trip enriches your mind and soul.
            </p>
            <p className="mt-3 text-lg text-gray-700 dark:text-gray-300">
              From serene landscapes to spiritual retreats, we bring you hand-picked destinations that help you reconnect with yourself.
            </p>
            <div className="mt-6 flex flex-col sm:flex-row sm:justify-start justify-center gap-4">
              <button
                aria-label="Learn more about TourForSoul"
                className="flex items-center gap-2 px-6 py-3 text-lg font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-lg shadow-lg transition duration-300"
              >
                Learn More <FaArrowRight />
              </button>
              <button
                onClick={() => router.push(`/contact`)}
                aria-label="Contact TourForSoul"
                className="px-6 py-3 text-lg font-semibold border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white rounded-lg transition duration-300"
              >
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Feature Cards */}
      <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-12">
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
            className="bubble-card flex flex-col items-center bg-white p-6 sm:p-8 rounded-xl shadow-md hover:scale-105 hover:shadow-lg transition-all duration-300 group"
            style={{ minHeight: "180px" }}
          >
            <div className={`mb-3 p-3 ${item.color} rounded-full shadow-md`}>
              {item.icon}
            </div>
            <h2 className="text-xl md:text-2xl font-semibold text-gray-800 mb-2">
              {item.title}
            </h2>
            <p className="text-sm md:text-lg text-gray-600">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default WhyChooseUs;
