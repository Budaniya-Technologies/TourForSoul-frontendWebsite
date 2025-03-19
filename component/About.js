"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { FaArrowRight, FaFacebookF, FaTwitter, FaInstagram, FaGlobe, FaHeart, FaUsers } from "react-icons/fa";

export default function About() {
  const [visible, setVisible] = useState(false);
  const [activeFaq, setActiveFaq] = useState(null);
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => setVisible(true), 200);
  }, []);

  const toggleFaq = (index) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  return (
    <section 
      className="relative bg-cover bg-center py-16" 
      style={{ backgroundImage: "url('/public/img11.jpg')" }}
    >
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className={`w-full md:w-1/2 transform transition-all duration-500 ${visible ? "opacity-100 scale-100" : "opacity-0 scale-95"}`}>
            <img
              src="/img9.jpg"
              alt="About TourForSoul"
              className="w-full rounded-lg shadow-xl transition-transform duration-300 hover:scale-105"
            />
          </div>
          <div className={`w-full md:w-1/2 text-center md:text-left transition-all duration-500 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}>
            <h2 className="text-4xl font-extrabold text-gray-900 dark:text-white leading-tight">
              Discover <span className="text-blue-600">TourForSoul</span>
            </h2>
            <p className="mt-4 text-lg text-gray-700 dark:text-gray-300">
              Welcome to <b>TourForSoul</b>, your gateway to <i>life-changing travel experiences</i>. We curate journeys that blend adventure, culture, and spirituality, ensuring that each trip enriches your mind and soul.
            </p>
            <p className="mt-3 text-lg text-gray-700 dark:text-gray-300">
              From serene landscapes to spiritual retreats, we bring you hand-picked destinations that help you reconnect with yourself.
            </p>
            <div className="mt-6 flex flex-col sm:flex-row sm:justify-start justify-center gap-4">
              <button className="flex items-center gap-2 px-6 py-3 text-lg font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-lg shadow-lg transition duration-300">
                Learn More <FaArrowRight />
              </button>
              <button onClick={() => router.push(`/contact`)} className="px-6 py-3 text-lg font-semibold border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white rounded-lg transition duration-300">
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="container mx-auto mt-16">
        <h3 className="text-3xl font-bold text-center mb-6">Why Choose Us?</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-10">
          {[
            { icon: <FaGlobe />, title: "Global Destinations", desc: "Explore the best locations across the world with ease." },
            { icon: <FaHeart />, title: "Trusted by Travelers", desc: "Thousands of happy travelers trust us for their adventures." },
            { icon: <FaUsers />, title: "Community-Driven", desc: "Join a like-minded community passionate about travel." },
          ].map((item, index) => (
            <div key={index} className="bg-gray-100 p-6 rounded-lg shadow-lg text-center">
              <div className="text-4xl text-blue-500 mb-4">{item.icon}</div>
              <h3 className="text-xl font-bold mb-2">{item.title}</h3>
              <p className="text-gray-700">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="container mx-auto mt-16 text-center">
        <h3 className="text-3xl font-bold mb-4">Follow Us</h3>
        <div className="flex justify-center space-x-6 sm:space-x-10">
          <a href="#" className="text-gray-900 text-3xl sm:text-4xl hover:text-blue-500 transition"><FaFacebookF /></a>
          <a href="#" className="text-gray-900 text-3xl sm:text-4xl hover:text-blue-400 transition"><FaTwitter /></a>
          <a href="#" className="text-gray-900 text-3xl sm:text-4xl hover:text-pink-500 transition"><FaInstagram /></a>
        </div>
      </div>
    </section>
  );
}
