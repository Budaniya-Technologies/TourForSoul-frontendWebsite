"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import LogoImg from "public/thebagPacker-logo.png";
import { FaSearch, FaBars, FaTimes } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { motion } from "framer-motion";

import gsap from "gsap";

import img1 from "public/mainDisp.jpg";
import img3 from "public/img2.jpg";
import img4 from "public/img9.jpg";
import img8 from "public/img7.jpg";
import img9 from "public/img8.jpg";

const slideTitles = [
  "Welcome to Treks & Trails",
  "Spiti Valley Adventure",
  "Experience the Himalayas",
  "Explore Hidden Landscapes",
  "Unforgettable Weekend Getaways",
  "Find Your Next Adventure",
];

function HomePage() {
  const welcomeTextRef = useRef(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    if (welcomeTextRef.current) {
      gsap.fromTo(
        ".welcome-word",
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          stagger: 0.1,
          duration: 0.5,
          ease: "power3.out",
          repeat: -1,
          repeatDelay: 3,
          yoyo: true,
        }
      );
    }
  }, []);

  return (
    <div className="relative">
      <nav className="absolute top-0 left-0 w-full bg-black bg-opacity-90 shadow-lg z-50">
        <div className="container mx-auto flex justify-between items-center px-6 py-4">
          {/* Left Logo */}
          <div className="text-2xl font-bold text-white flex items-center space-x-2">
            <Image
              width={30}
              height={40}
              src={LogoImg}
              className="rounded-full border-2 border-white"
              alt="Flowbite Logo"
            />
            <span>TourForSoul</span>
          </div>

          {/* Centered Search Bar */}
          <div className="flex items-center bg-white p-2 rounded-full shadow-md w-1/2 sm:w-2/3 lg:w-1/3">
            <input
              type="text"
              placeholder="Search adventures..."
              className="p-2 outline-none w-full rounded-l-full"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button className="p-2 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition duration-300">
              <FaSearch />
            </button>
          </div>

          {/* Right Navigation Menu */}
          <div className="flex items-center">
            <ul
              className={`lg:flex space-x-6 text-white ${
                isMenuOpen
                  ? "flex flex-col absolute bg-black top-full left-0 w-full p-6 space-y-4 z-40"
                  : "hidden"
              }`}
            >
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/allpackages">All Package</Link>
              </li>
              <li>
                <Link href="/about">About</Link>
              </li>
              <li>
                <Link href="/ourteam">Team</Link>
              </li>
              <li>
                <Link href="/blog">Blog</Link>
              </li>
              <li>
                <Link href="/contact">Contact Us</Link>
              </li>
            </ul>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden text-white ml-4"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
        </div>
      </nav>

      <Swiper
        modules={[Autoplay, Navigation, Pagination]}
        spaceBetween={0}
        slidesPerView={1}
        loop={true}
        autoplay={{ delay: 4000 }}
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
            <div className="absolute bottom-6 left-6 text-white text-xl md:text-3xl font-bold bg-black bg-opacity-50 px-4 py-2 rounded-lg">
              {slideTitles[index]}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <motion.div
        ref={welcomeTextRef}
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center z-40 bg-black bg-opacity-0 p-6 rounded-lg"
      >
        {/* New Image Added Above Text */}
        <div className="mb-4 flex justify-center sm:justify-between space-x-4">
          <Image
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjXDEZhIgyNzX8pHAn5p6tkVknIiI42l6G4t6nwRZHgyULqoQTKvH-DU245y3xcI-alvk&usqp=CAU"
            alt="Happy Customer"
            width={150}
            height={150}
            className="rounded-[30%] border-4 border-white"
          />
          <Image
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRi_rNKcxfSCHqrIIXgZyAEAb5WHboGeTNWyvBy4Sw0ruzRPfBupDmIjgsQYpXhEB2J6fo&usqp=CAU"
            alt="Happy Customer"
            width={150}
            height={150}
            className="rounded-[30%] border-4 border-white"
          />
          <Image
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRA4i0-EWmHYx8Vx1cghYUQU_QTJT9CeSZyJw&s"
            alt="Happy Customer"
            width={150}
            height={150}
            className="rounded-[30%] border-4 border-white"
          />
        </div>

        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white">
          {"Welcome to our website, visit this tourist site"
            .split(" ")
            .map((word, index) => (
              <motion.span
                key={index}
                className="welcome-word inline-block opacity-0"
              >
                {word}&nbsp;
              </motion.span>
            ))}
        </h1>

        <motion.button
          className="mt-12 px-6 py-3 bg-blue-500 text-white text-lg font-semibold rounded-lg shadow-md hover:bg-blue-600 transition duration-300"
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 1, repeat: Infinity }}
        >
          Book Now
        </motion.button>
      </motion.div>
    </div>
  );
}

export default HomePage;
