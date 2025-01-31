import React, { useState, useEffect } from "react";
import Slider from "react-slick";

function BlogPage() {
  const [blogData, setBlogData] = useState([]);

  useEffect(() => {
    const dummyData = [
      {
        title: "Hiking in the Himalayas",
        description: "Discover the beauty of the Himalayan trekking trails.",
        author: "John Doe",
        date: "January 10, 2025",
        image: "/img1.jpg", // Adjusted image path
        redirectLink: "/blogs/hiking-in-the-himalayas",
      },
      {
        title: "Top 10 Trekking Destinations",
        description: "Our top 10 trekking destinations around the world.",
        author: "Jane Smith",
        date: "February 5, 2025",
        image: "/img2.jpg", // Adjusted image path
        redirectLink: "/blogs/top-10-trekking-destinations",
      },
      {
        title: "Essential Trekking Gear",
        description: "What gear do you need for your next trekking adventure?",
        author: "Alex Brown",
        date: "March 12, 2025",
        image: "/img3.jpg", // Adjusted image path
        redirectLink: "/blogs/essential-trekking-gear",
      },
      {
        title: "Everest Base Camp Trek Review",
        description: "A personal account of the Everest Base Camp Trek.",
        author: "Chris White",
        date: "April 22, 2025",
        image: "/img4.jpg", // Adjusted image path
        redirectLink: "/blogs/everest-base-camp-trek-review",
      },
    ];

    setBlogData(dummyData);
  }, []);

  const settings = {
    dots: true, // Show navigation dots
    infinite: true, // Infinite loop
    speed: 1000, // Transition speed increased to 1 second
    slidesToShow: 3, // Number of blogs to show at a time
    slidesToScroll: 1, // Number of blogs to scroll at a time
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
      <div>
        <h2 className="text-4xl text-center font-semibold text-gray-900 my-8">
          Latest Blog Posts
        </h2>
      </div>
      <div className="blog-slider-container">
        <Slider {...settings}>
          {/* Display the blog posts */}
          {blogData.map((item, key) => {
            return (
              <div key={key} className="blog-card-container px-4 py-6">
                <div className="bg-white p-6 rounded-lg shadow-xl transform transition-all hover:scale-105 hover:shadow-2xl">
                  {/* Blog post card content */}
                  <div className="blog-post-card">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-56 object-cover rounded-lg"
                    />
                    <h3 className="text-xl font-semibold mt-4">{item.title}</h3>
                    <p className="text-gray-600 my-2">{item.description}</p>
                    <p className="text-gray-500 text-sm">
                      {item.author} | {item.date}
                    </p>
                    <a
                      href={item.redirectLink}
                      className="text-blue-500 hover:underline mt-4 inline-block"
                    >
                      Read More
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </Slider>
      </div>
    </div>
  );
}

export default BlogPage;
