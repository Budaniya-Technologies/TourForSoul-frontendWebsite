"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// Import images
import img1 from "public/mainDisp.jpg";
import img3 from "public/img2.jpg";
import img4 from "public/img9.jpg";
// import img6 from "public/img5.png";
import img8 from "public/img7.jpg";
import img9 from "public/img8.jpg";

// Titles for each image
const slideTitles = [
  "Welcome to Treks & Trails",
  "Spiti Valley Adventure",
  "Experience the Himalayas",
  "Explore Hidden Landscapes",
  "Unforgettable Weekend Getaways",
  "Find Your Next Adventure",
];

function HomePage() {
  return (
    <div className="relative">
      {/* Navbar */}
      <nav className="absolute top-20 left-0 w-full bg-opacity-80 shadow-md z-50">
        <div className="container mx-auto flex justify-between items-center px-6 py-3">
          <div className="text-lg font-bold">TourForSoul</div>
          <ul className="flex space-x-6 text-gray-700">
            <li><Link href="/" className="hover:text-blue-600">Home</Link></li>
            <li><Link href="/allpackages" className="hover:text-blue-600">All Package</Link></li>
            <li><Link href="/about" className="hover:text-blue-600">About</Link></li>
            <li><Link href="/ourteam" className="hover:text-blue-600">Team</Link></li>
            <li><Link href="/blog" className="hover:text-blue-600">Blog</Link></li>
            <li><Link href="/contact" className="hover:text-blue-600">Contact Us</Link></li>
          </ul>
        </div>
      </nav>

      {/* Image Slider with Text Overlay at Bottom Left */}
      <Swiper
        modules={[Autoplay, Navigation, Pagination]}
        spaceBetween={0}
        slidesPerView={1}
        loop={true}
        autoplay={{ delay: 5000 }}
        navigation
        pagination={{ clickable: true }}
        className="w-full h-[90vh]"
      >
        {[img1, img3, img4, img8, img9].map((img, index) => (
          <SwiperSlide key={index} className="relative">
            <Image
              src={img}
              alt={`Slide ${index + 1}`}
              width={1920} 
              height={1080} 
              priority
              className="w-full h-full object-cover"
            />
            {/* Text Overlay at Bottom Left */}
            <div className="absolute bottom-6 left-6 text-white text-xl md:text-3xl font-bold bg-black bg-opacity-50 px-4 py-2 rounded-lg">
              {slideTitles[index]}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default HomePage;
