import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import img from "public/mainDisp.jpg";
import img1 from "public/img1.jpg";
import img2 from "public/img2.jpg";
import img3 from "public/img33.jpg";
import img4 from "public/img44.jpeg";
import img5 from "public/img5.png";
import img6 from "public/img6.jpg";
import img7 from "public/img7.jpg";
import img8 from "public/img8.jpg";
import img9 from "public/img9.jpg";
import PackageInfoElementCard from "@/component/PackageInfoElementCard"; // Assuming this is a predefined component

function PackageInfo() {
  const [PackageData, setPackageData] = useState([]);

  useEffect(() => {
    const dummyData = [
      {
        title: "Everest Base Camp",
        price: 1200,
        pickup: "Kathmandu",
        duration: "14 days",
        isActive: true,
        isHomePage: true,
        redirectLink: "/packages/everest-base-camp",
        image: img,
      },
      {
        title: "Everest Base Camp",
        price: 1200,
        pickup: "Kathmandu",
        duration: "14 days",
        isActive: true,
        isHomePage: true,
        redirectLink: "/packages/everest-base-camp",
        image: img1,
      },
      {
        title: "Annapurna Circuit",
        price: 1000,
        pickup: "Pokhara",
        duration: "21 days",
        isActive: true,
        isHomePage: true,
        redirectLink: "/packages/annapurna-circuit",
        image: img2,
      },
      {
        title: "Langtang Valley",
        price: 800,
        pickup: "Kathmandu",
        duration: "12 days",
        isActive: true,
        isHomePage: true,
        redirectLink: "/packages/langtang-valley",
        image: img3,
      },
      {
        title: "Manaslu Circuit",
        price: 1400,
        pickup: "Arughat",
        duration: "18 days",
        isActive: true,
        isHomePage: true,
        redirectLink: "/packages/manaslu-circuit",
        image: img4,
      },
      {
        title: "Gosaikunda Trek",
        price: 950,
        pickup: "Dhunche",
        duration: "10 days",
        isActive: true,
        isHomePage: true,
        redirectLink: "/packages/gosaikunda-trek",
        image: img5,
      },
      {
        title: "Upper Mustang",
        price: 1800,
        pickup: "Jomsom",
        duration: "14 days",
        isActive: true,
        isHomePage: true,
        redirectLink: "/packages/upper-mustang",
        image: img6,
      },
      {
        title: "Kanchenjunga Base Camp",
        price: 2000,
        pickup: "Suketar",
        duration: "22 days",
        isActive: true,
        isHomePage: true,
        redirectLink: "/packages/kanchenjunga-base-camp",
        image: img7,
      },
      {
        title: "Everest View Trek",
        price: 950,
        pickup: "Lukla",
        duration: "8 days",
        isActive: true,
        isHomePage: true,
        redirectLink: "/packages/everest-view-trek",
        image: img8,
      },
      {
        title: "Everest View Trek",
        price: 950,
        pickup: "Lukla",
        duration: "8 days",
        isActive: true,
        isHomePage: true,
        redirectLink: "/packages/everest-view-trek",
        image: img9,
      },
    ];

    setPackageData(dummyData);
  }, []);

  // Slider settings
  const settings = {
    dots: true, // Show navigation dots
    infinite: true, // Infinite loop
    speed: 1000, // Transition speed increased to 1 second
    slidesToShow: 3, // Number of packages to show at a time
    slidesToScroll: 1, // Number of packages to scroll at a time
    autoplay: true, // Auto scroll
    autoplaySpeed: 3000, // Time between each slide (in milliseconds)
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="my-10 mx-auto p-8 rounded-lg">
      <style jsx>{`
        .package-card-container img {
          height: 200px; /* Adjust height as needed */
          object-fit: cover; /* Ensure images maintain their aspect ratio */
          width: 100%; /* Ensure image takes full width of its container */
        }
      `}</style>
      <div>
        <h2 className="text-4xl text-center font-semibold text-gray-900 my-8">
          Featured Trekking Tours
        </h2>
      </div>
      <div className="package-slider-container">
        <Slider {...settings}>
          {/* Display the packages */}
          {PackageData.map((item, key) => {
            if (item.isActive && item.isHomePage) {
              return (
                <div key={key} className="package-card-container px-4 py-6">
                  <div className="bg-white p-6 rounded-lg shadow-xl transform transition-all hover:scale-105 hover:shadow-2xl">
                    <PackageInfoElementCard
                      packageName={item.title}
                      packagePrice={`${item.price} /Per (Group Discount Available)`}
                      packageStartingDest={item.pickup}
                      packageEndDest={item.pickup}
                      packageDuration={item.duration}
                      packageInfoLink={item.redirectLink}
                      packageImg={item.image}
                    />
                  </div>
                </div>
              );
            }
            return null;
          })}
        </Slider>
      </div>

    </div>
  );
}

export default PackageInfo;
