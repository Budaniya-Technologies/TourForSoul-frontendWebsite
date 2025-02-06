import { useRouter } from "next/router";
import { FaMapMarkerAlt, FaClock, FaInfoCircle } from "react-icons/fa";

const PackageInfoElementCard = ({
  packageName,
  packagePrice,
  packageStartingDest,
  packageEndDest,
  packageDuration,
  packageImg,
  packageInfoLink,
}) => {
  const router = useRouter();

  return (
    <div className="w-90 bg-white rounded-xl shadow-sm overflow-hidden transform transition-all hover:scale-101 hover:shadow-sm">
      {/* Image Section */}
      <div className="relative h-64"> 
        <img
          src={packageImg}
          alt={packageName}
          className="w-full h-full object-cover rounded-t-xl"
        />
        <div className="absolute top-3 right-3 bg-blue-600 text-white px-8 py-2 text-sm font-bold rounded-full shadow-md">
          {packagePrice}
        </div>
      </div>

      {/* Text Content */}
      <div className="p-6 text-center bg-gray-50 rounded-b-xl">
        <h3 className="text-lg font-bold text-gray-900">{packageName}</h3>

        {/* Duration with Icon */}
        <div className="flex items-center justify-center text-sm text-gray-700 mt-1">
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
            onClick={() => router.push(`/package/${packageInfoLink}`)}
            className="flex items-center gap-2 px-5 py-2 text-sm text-white font-medium bg-blue-600 rounded-lg hover:bg-blue-700 transition cursor-pointer"
          >
            <FaInfoCircle /> More Info
          </button>
        </div>
      </div>
    </div>
  );
};

export default PackageInfoElementCard;
