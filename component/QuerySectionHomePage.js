import React from "react";
import { FaWhatsapp } from "react-icons/fa";

function QuerySectionHomePage() {
  return (
    <div className="bg-white py-10 px-5 shadow-lg rounded-lg">
      <div className="text-center max-w-4xl mx-auto">
        <h1 className="text-5xl font-bold text-blue-600 mb-8 border-b-4 border-yellow-400 inline-block pb-2">
          Any Query? Can't decide?
        </h1>
        <p className="text-lg text-gray-700 mt-4 leading-relaxed animate-fade-in">
          Don't hesitate! Hand over all your requirements to our travel experts
          and let them assist you.
        </p>
        <p className="text-lg text-gray-700 mt-2 leading-relaxed animate-fade-in">
          <strong>P.S:</strong> Your wanderlust fuels our enthusiasm! Don't
          hesitate to reach out—we're eagerly waiting to chat about your travel
          dreams.
        </p>
      </div>

      <div className="flex flex-col sm:flex-row justify-center items-center my-8 gap-4">
        <a
          href="https://api.whatsapp.com/send?phone=918233444665&text=I%20am%20interested%20in%20this%20package"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 py-3 px-6 text-lg font-semibold text-gray-900 bg-white rounded-lg border-2 border-green-500 shadow-md hover:bg-gray-100 hover:text-green-600 transition duration-300 transform hover:scale-105 hover:rotate-2"
        >
          <FaWhatsapp className="text-green-500" size={24} />
          +91 8233444665
        </a>

        <a
          href="https://api.whatsapp.com/send?phone=9182334444665&text=I%20am%20interested%20in%20this%20package"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 py-3 px-6 text-lg font-semibold text-white bg-green-600 rounded-lg shadow-md hover:bg-green-500 transition duration-300 transform hover:scale-105 hover:rotate-2"
        >
          <FaWhatsapp className="text-white" size={24} />
          WhatsApp Us
        </a>
      </div>

      <div className="text-center">
        <p className="text-gray-600 animate-slide-up">
          Available <span className="font-bold text-gray-900">24/7</span> for your assistance.
        </p>
      </div>

      {/* Inline CSS for animations */}
      <style jsx>{`
        /* 3D Text Motion */
        .text-3d-motion {
          animation: text3d 1.5s ease-in-out infinite alternate;
        }

        @keyframes text3d {
          0% {
            transform: translateZ(0);
          }
          100% {
            transform: translateZ(20px);
          }
        }

        /* Fade-in Animation */
        .animate-fade-in {
          animation: fadeIn 2s ease-out;
        }

        @keyframes fadeIn {
          0% {
            opacity: 0;
          }
          100% {
            opacity: 1;
          }
        }

        /* Slide-up animation */
        .animate-slide-up {
          animation: slideUp 1.5s ease-out;
        }

        @keyframes slideUp {
          0% {
            transform: translateY(30px);
            opacity: 0;
          }
          100% {
            transform: translateY(0);
            opacity: 1;
          }
        }
      `}</style>
    </div>
  );
}

export default QuerySectionHomePage;
