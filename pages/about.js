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
      answer: "We provide travel experiences that help you connect with nature and explore new destinations.",
    },
    {
      question: "How can I join the community?",
      answer: "Simply sign up on our website and start exploring destinations curated just for you.",
    },
  ];

  return (
    <div className="w-4/5 mx-auto font-sans py-16 px-8">
      <section className="pt-20 pb-16 overflow-hidden bg-white text-gray-900 rounded-lg shadow-2xl p-12">
        <h1 className="text-5xl font-bold text-center text-blue-600 mb-12">About Us</h1>
        <div className="container mx-auto">
          <div className="flex flex-wrap items-center -mx-4">
            <div className="w-full px-4 lg:w-1/2 animate-fade-in-up mb-12 lg:mb-0">
              <Image
                width={400}
                height={400}
                src={AjayTecki}
                alt="Ajay Tecki"
                className="rounded-2xl shadow-2xl border-8 border-gray-300"
              />
            </div>
            <div className="w-full px-4 lg:w-1/2 animate-fade-in-right text-center lg:text-left">
              <h2 className="text-4xl font-extrabold leading-tight mb-6">Welcome to <span className="text-blue-500">Tourforsoul</span></h2>
              <p className="text-lg leading-relaxed mb-8">
                Tourforsoul is your gateway to amazing travel experiences.
                Join us and make unforgettable memories.
              </p>
              <a
                href="/#"
                className="px-10 py-4 text-lg font-bold bg-blue-500 text-white rounded-lg shadow-lg hover:bg-blue-600 transition transform hover:scale-110"
              >
                Get Started
              </a>
            </div>
          </div>

          <div className="mt-20">
            <h3 className="text-3xl font-bold text-center mb-8">Frequently Asked Questions</h3>
            <div className="mt-8 space-y-6">
              {faqData.map((faq, index) => (
                <div key={index} className="border-b border-gray-300 pb-6">
                  <button
                    onClick={() => toggleFaq(index)}
                    className="w-full text-left text-xl font-medium flex justify-between hover:text-blue-500 transition"
                  >
                    {faq.question}
                    <span>{activeFaq === index ? "-" : "+"}</span>
                  </button>
                  {activeFaq === index && <p className="mt-4 text-lg text-gray-700">{faq.answer}</p>}
                </div>
              ))}
            </div>
          </div>

          <div className="mt-20 text-center">
            <h3 className="text-3xl font-bold mb-6">Follow Us</h3>
            <div className="flex justify-center space-x-10">
              <a href="#" className="text-gray-900 text-4xl hover:text-blue-500 transition">
                <FaFacebookF />
              </a>
              <a href="#" className="text-gray-900 text-4xl hover:text-blue-400 transition">
                <FaTwitter />
              </a>
              <a href="#" className="text-gray-900 text-4xl hover:text-pink-500 transition">
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
