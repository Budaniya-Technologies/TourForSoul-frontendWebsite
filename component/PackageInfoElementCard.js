import { useRouter } from "next/router";
import { FaMapMarkerAlt, FaClock, FaInfoCircle } from "react-icons/fa";

const PackageInfoElementCard = ({
  packageName,
  packagePrice,
  packageStartingDest,
  packageEndDest,
  packageDuration,
  packageInfoLink,
  packageImg,
}) => {
  const router = useRouter();
  return (
    <div className="w-96 h-[500px] bg-white rounded-xl shadow-lg overflow-hidden transform transition-all hover:scale-105 hover:shadow-2xl">
      {/* Image Section */}
      <div className="relative h-72"> {/* Increased image height here */}
        <img
          src={packageImg}
          alt={packageName}
          className="w-full h-full object-cover rounded-t-xl" // Image takes full height of its container
        />
        <div className="absolute top-3 right-3 bg-blue-600 text-white px-4 py-2 text-sm font-bold rounded-full shadow-md">
          {packagePrice}
        </div>
      </div>

      {/* Text Content */}
      <div className="p-6 text-center bg-gray-50 rounded-b-xl h-[calc(100%-18rem)]"> {/* Increased content height here */}
        <h3 className="text-xl font-bold text-gray-900">{packageName}</h3> {/* Larger title text */}

        {/* Duration with Icon */}
        <div className="flex items-center justify-center text-sm text-gray-700 mt-2">
          <FaClock className="text-blue-500 mr-2" />
          <p>{packageDuration}</p>
        </div>

        {/* Destination Info */}
        <div className="flex items-center justify-center text-sm text-gray-800 mt-2">
          <FaMapMarkerAlt className="text-red-500 mr-2" />
          <p>
            {packageStartingDest} → {packageEndDest}
          </p>
        </div>

        {/* More Info Button */}
        <div className="mt-4 flex justify-center">
          <button
            onClick={() => router.push(`/package/${encodeURIComponent(packageName)}`)}
            className="flex items-center justify-center gap-2 px-6 py-3 text-sm text-white font-medium bg-blue-600 rounded-lg hover:bg-blue-700 transition cursor-pointer"
          >
            <FaInfoCircle /> More Info
          </button>
        </div>
      </div>
    </div>
  );
};

export default PackageInfoElementCard;
