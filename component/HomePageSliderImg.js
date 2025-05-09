"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { motion } from "framer-motion";
import gsap from "gsap";
import img1 from "/public/mainDisp.jpg";
import { useDispatch, useSelector } from "react-redux";
import { changeTitle } from "@/redux/slice/packageInfo";
import { FaSearch } from "react-icons/fa";
import { apiGet } from "@/Utils/http";

const getHomeAPI = `apiAdmin/v1/homepage?websiteId=${process.env.NEXT_PUBLIC_WEBSITE_ID}`;

function HomePage() {
  const welcomeTextRef = useRef(null);
  const packageTitle = useSelector((state) => state.title?.value);
  const ipURL = process.env.NEXT_PUBLIC_API_URL;
  const bannerImg = `${ipURL.slice(0, ipURL.length - 1)}`;

  const [homeItem, setHomeItem] = useState("");
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchHomeItem = async () => {
      setLoading(true);
      try {
        const response = await apiGet(getHomeAPI);
        if (response?.data) {
          console.log(response.data);

          setHomeItem(response.data);
        }
      } catch (error) {
        console.error("Error fetching home item:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchHomeItem();
  }, []);

  useEffect(() => {
    if (window.innerWidth >= 768 && welcomeTextRef.current) {
      const words = welcomeTextRef.current.querySelectorAll(".welcome-word");
      if (words.length > 0) {
        gsap.fromTo(
          ".welcome-word",
          { opacity: 0, y: 20 },
          {
            opacity: 1,
            y: 0,
            stagger: 0.1,
            duration: 10,
            ease: "power3.out",
          }
        );
      }
    }
  }, []); // Run once on mount

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
         {!loading && <SwiperSlide className="relative">
            <Image
              src={`${homeItem?.bannerImg ? bannerImg.concat(homeItem?.bannerImg) : img1}`}
              alt={`Slide`}
              width={1920}
              height={1080}
              priority
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-6 left-6 text-white text-xl md:text-3xl font-bold bg-black bg-opacity-50 px-4 py-2 rounded-lg">
              {packageTitle}
            </div>
          </SwiperSlide>}
      </Swiper>

      <motion.div
        ref={welcomeTextRef}
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center z-40 p-6 rounded-lg"
      >
        <h4 className="text-2xl sm:text-5xl md:text-6xl font-bold text-white">
          {homeItem?.headingText &&
            homeItem.headingText.split(" ").map((word, index) => (
              <motion.span
                key={index}
                className="welcome-word inline-block opacity-0"
              >
                {word}&nbsp;
              </motion.span>
            ))}
        </h4>

        <div className="mt-8 flex flex-col md:flex-row items-center justify-center w-full px-4">
          <div
            className="relative hidden md:flex items-center border border-gray-300 dark:border-gray-700 rounded-full shadow-md bg-white dark:bg-white-800 px-2 
              w-1/2 max-w-[90%] md:max-w-sm lg:max-w-md xl:max-w-lg
              h-10 md:h-10 lg:h-12"
          >
            <FaSearch
              size={20}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500 dark:text-gray-400"
            />
            <input
              type="text"
              placeholder="Search adventures..."
              className="pl-10 pr-4 bg-transparent outline-none w-full text-gray-900 dark:text-gray
                text-sm md:text-base lg:text-lg
                h-full"
            />
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default HomePage;
