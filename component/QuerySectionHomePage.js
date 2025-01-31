import React from "react";
import { FaWhatsapp } from "react-icons/fa";

function QuerySectionHomePage() {
  return (
    <div className="bg-white py-10 px-5 shadow-lg rounded-lg">
      <div className="text-center max-w-4xl mx-auto">
        <h1 className="text-4xl font-extrabold text-gray-900">
          Any Query? Can't decide?
        </h1>
        <p className="text-lg text-gray-700 mt-4 leading-relaxed">
          Don't hesitate! Hand over all your requirements to our travel experts
          and let them assist you.
        </p>
        <p className="text-lg text-gray-700 mt-2 leading-relaxed">
          <strong>P.S:</strong> Your wanderlust fuels our enthusiasm! Don't
          hesitate to reach out—we're eagerly waiting to chat about your travel
          dreams.
        </p>
      </div>

      <div className="flex flex-col sm:flex-row justify-center items-center my-8 gap-4">
        <a
          href="https://api.whatsapp.com/send?phone=918290405227&text=I%20am%20interested%20in%20this%20package"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 py-3 px-6 text-lg font-semibold text-gray-900 bg-white rounded-lg border-2 border-green-500 shadow-md hover:bg-gray-100 hover:text-green-600 transition duration-300"
        >
          <FaWhatsapp className="text-green-500" size={24} />
          +91 82904 05227
        </a>

        <a
          href="https://api.whatsapp.com/send?phone=918290405227&text=I%20am%20interested%20in%20this%20package"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 py-3 px-6 text-lg font-semibold text-white bg-green-600 rounded-lg shadow-md hover:bg-green-500 transition duration-300"
        >
          <FaWhatsapp className="text-white" size={24} />
          WhatsApp Us
        </a>
      </div>

      <div className="text-center">
        <p className="text-gray-600">
          Available <span className="font-bold text-gray-900">24/7</span> for your assistance.
        </p>
      </div>
    </div>
  );
}

export default QuerySectionHomePage;
