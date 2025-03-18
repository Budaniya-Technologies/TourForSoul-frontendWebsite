import React, { useState } from "react";
import Image from "next/image";
import AjayTecki from "public/ajayImg.jpg";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

function About() {
  const [activeFaq, setActiveFaq] = useState(null);

  const toggleFaq = (index) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  const faqData = [
    {
      question: "What services do we offer?",
      answer:
        "We provide travel experiences that help you connect with nature and explore new destinations.",
    },
    {
      question: "How can I join the community?",
      answer:
        "Simply sign up on our website and start exploring destinations curated just for you.",
    },
  ];

  return (
    <div className="max-w-6xl w-full mx-auto font-sans py-12 px-4 sm:px-8">
      <section className="pt-16 pb-12 bg-white text-gray-900 rounded-lg shadow-lg p-6 sm:p-12">
        <h1 className="text-4xl sm:text-5xl font-bold text-center text-blue-600 mb-10">
          About Us
        </h1>
        <div className="container mx-auto">
          <div className="flex flex-col lg:flex-row items-center lg:space-x-12">
            <div className="w-full lg:w-1/2 flex justify-center mb-8 lg:mb-0">
              <Image
                width={400}
                height={400}
                src={AjayTecki}
                alt="Ajay Tecki"
                className="rounded-2xl shadow-lg border-4 border-gray-300"
              />
            </div>
            <div className="w-full lg:w-1/2 text-center lg:text-left">
              <h2 className="text-3xl sm:text-4xl font-extrabold mb-6">
                Welcome to <span className="text-blue-500">Tourforsoul</span>
              </h2>
              <p className="text-lg leading-relaxed mb-6">
                Tourforsoul is your gateway to amazing travel experiences.
                Join us and make unforgettable memories.
              </p>
              <a
                href="/#"
                className="px-8 py-3 sm:px-10 sm:py-4 text-lg font-bold bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600 transition transform hover:scale-105"
              >
                Get Started
              </a>
            </div>
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
          <div className="mt-16 text-center">
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
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
