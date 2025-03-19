import React, { useState } from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaGlobe, FaHiking, FaMapMarkedAlt, FaCampground, FaPlaneDeparture, FaUmbrellaBeach, FaSkiing, FaBicycle, FaShip, FaMountain, FaCity, FaTree } from "react-icons/fa";

function About() {
  const [activeFaq, setActiveFaq] = useState(null);

  const toggleFaq = (index) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  const faqData = [
    {
      question: "What services do we offer?",
      answer:
        "We provide travel experiences that help you connect with nature and explore new destinations. Our tours range from adventurous hiking trails to cultural and historical explorations. We also offer eco-tourism, luxury getaways, and customized travel plans for solo and group travelers.",
    },
    {
      question: "How can I join the community?",
      answer:
        "Simply sign up on our website and start exploring destinations curated just for you. Engage with fellow travelers, share experiences, and plan your next journey. We also provide travel guides, tips, and exclusive discounts for members.",
    },
    {
      question: "Do you offer guided tours?",
      answer:
        "Yes, we have expert guides who provide immersive experiences in various locations worldwide, ensuring safety, knowledge, and adventure. Our guides are well-trained professionals with in-depth knowledge of the destinations.",
    },
    {
      question: "What destinations do you cover?",
      answer:
        "Our tours cover breathtaking destinations including mountains, beaches, historical sites, spiritual retreats, exotic wilderness locations, and urban adventures in major cities worldwide.",
    },
  ];

  return (
    <div className="max-w-6xl w-full mx-auto font-sans py-12 px-4 sm:px-8">
      <section className="pt-16 pb-12 bg-white text-gray-900 rounded-lg shadow-lg p-6 sm:p-12">
        <h1 className="text-4xl sm:text-5xl font-bold text-center text-blue-600 mb-10">
          About Us
        </h1>
        <div className="container mx-auto">
          <div className="w-full text-center">
            <h2 className="text-3xl sm:text-4xl font-extrabold mb-6">
              Welcome to <span className="text-blue-500">TourForSoul</span>
            </h2>
            <p className="text-lg leading-relaxed mb-6">
              TourForSoul is your gateway to unforgettable travel experiences.
              Explore destinations filled with adventure, culture, and spirituality. Whether you're seeking thrilling hikes, peaceful retreats, or cultural discoveries, we have something for every traveler. Our curated trips ensure safety, excitement, and deep connection with nature.
            </p>
          </div>

          {/* Travel Experience Boxes */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-10">
            {[
              { icon: <FaHiking />, title: "Hiking Adventures", desc: "Explore breathtaking trails with experienced guides." },
              { icon: <FaPlaneDeparture />, title: "International Tours", desc: "Travel to stunning destinations around the globe." },
              { icon: <FaCampground />, title: "Camping Trips", desc: "Immerse yourself in nature with safe and fun camping experiences." },
              { icon: <FaSkiing />, title: "Skiing & Snowboarding", desc: "Enjoy thrilling snow sports in top winter destinations." },
              { icon: <FaBicycle />, title: "Cycling Tours", desc: "Ride through scenic routes and discover hidden gems." },
              { icon: <FaShip />, title: "Luxury Cruises", desc: "Experience the ocean like never before with our premium cruises." },
            ].map((item, index) => (
              <div key={index} className="bg-gray-100 p-6 rounded-lg shadow-lg text-center">
                <div className="text-4xl text-blue-500 mb-4">{item.icon}</div>
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-gray-700">{item.desc}</p>
              </div>
            ))}
          </div>

          {/* FAQ Section */}
          <div className="mt-16">
            <h3 className="text-3xl font-bold text-center mb-6">
              Frequently Asked Questions
            </h3>
            <div className="mt-6 space-y-6">
              {faqData.map((faq, index) => (
                <div key={index} className="border-b border-gray-300 pb-4">
                  <button
                    onClick={() => toggleFaq(index)}
                    className="w-full text-left text-lg font-medium flex justify-between items-center py-3 hover:text-blue-500 transition"
                  >
                    {faq.question}
                    <span className="text-2xl">{activeFaq === index ? "−" : "+"}</span>
                  </button>
                  {activeFaq === index && (
                    <p className="mt-2 text-gray-700 text-base">{faq.answer}</p>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Social Media Section */}
          {/* <div className="mt-16 text-center">
            <h3 className="text-3xl font-bold mb-4">Follow Us</h3>
            <div className="flex justify-center space-x-6 sm:space-x-10">
              <a
                href="#"
                className="text-gray-900 text-3xl sm:text-4xl hover:text-blue-500 transition"
              >
                <FaFacebookF />
              </a>
              <a
                href="#"
                className="text-gray-900 text-3xl sm:text-4xl hover:text-blue-400 transition"
              >
                <FaTwitter />
              </a>
              <a
                href="#"
                className="text-gray-900 text-3xl sm:text-4xl hover:text-pink-500 transition"
              >
                <FaInstagram />
              </a>
            </div>
          </div> */}
        </div>
      </section>
    </div>
  );
}

export default About;
