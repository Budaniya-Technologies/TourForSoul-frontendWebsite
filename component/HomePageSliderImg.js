"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { motion } from "framer-motion";
import gsap from "gsap";
import img1 from "public/mainDisp.jpg";
import { useDispatch, useSelector } from "react-redux";
import { changeTitle } from "@/redux/slice/packageInfo";
import { FaSearch } from "react-icons/fa";

function HomePage() {
  const welcomeTextRef = useRef(null);
  const packageTitle = useSelector((state) => state.title?.value);
  const dispatch = useDispatch();

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
<Swiper
  modules={[Autoplay, Navigation, Pagination]}
  spaceBetween={0}
  slidesPerView={1}
  loop={true}
  autoplay={{ delay: 4000 }}
  navigation
  pagination={{ clickable: true }}
  className="w-full h-[65vh] sm:h-[70vh] md:h-[75vh] lg:h-[85vh] xl:h-[95vh]"
  onSlideChange={() => dispatch(changeTitle("New Adventure Awaits"))}
>
  {[img1].map((img, index) => (
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
        {packageTitle}
      </div>
    </SwiperSlide>
  ))}
</Swiper>


      <motion.div
        ref={welcomeTextRef}
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center z-40 p-6 rounded-lg"
      >
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

        <div className="mt-8 flex flex-col md:flex-row items-center justify-center w-full px-4">
          <div
            className="relative flex items-center border border-gray-300 dark:border-gray-700 rounded-full shadow-md bg-white dark:bg-white-800 px-4 
              w-full max-w-xs sm:max-w-sm md:w-2/3 lg:w-1/2 xl:w-1/3
              h-10 sm:h-12 md:h-14 lg:h-16"
          >
            <FaSearch
              size={20}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500 dark:text-gray-400"
            />
            <input
              type="text"
              placeholder="Search adventures..."
              className="pl-10 pr-4 bg-transparent outline-none w-full text-gray-900 dark:text-white
                text-sm sm:text-base md:text-lg lg:text-xl
                h-full"
            />
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default HomePage;
