import { useRouter } from "next/router";
import Image from "next/image";
import Link from "next/link";
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
    <Link href={`/package/${packageInfoLink}`} className="block">
      <div className="w-full bg-white rounded-xl shadow-md overflow-hidden transform transition-all hover:scale-105 hover:shadow-lg">
        {/* Image Section */}
        <div className="relative h-64">
          <Image
            src={packageImg}
            alt={packageName}
            layout="fill"
            objectFit="cover"
            className="rounded-t-xl"
          />
          <div className="absolute top-3 right-3 bg-blue-600 text-white px-4 py-1 text-sm font-bold rounded-full shadow-md">
            {packagePrice}
          </div>
        </div>

        {/* Text Content */}
        <div className="p-4 bg-gray-50 rounded-b-xl">
          <h3 className="text-lg font-bold text-gray-900">{packageName}</h3>

          {/* Duration with Icon */}
          <div className="flex text-sm text-gray-700 mt-2">
            <FaClock className="text-blue-500 mr-2" />
            <p>{packageDuration}</p>
          </div>

          {/* Destination Info */}
          <div className="flex  text-sm text-gray-800 mt-2">
            <FaMapMarkerAlt className="text-red-500 mr-2" />
            <p>
              {packageStartingDest} → {packageEndDest}
            </p>
          </div>

          {/* More Info Button */}
          <div className="mt-4 flex ">
            <Link
              href={`/package/${packageInfoLink}`}
              className="flex items-center gap-2 px-5 py-2 text-sm text-white font-medium bg-blue-600 rounded-lg hover:bg-blue-700 transition cursor-pointer"
            >
              <FaInfoCircle /> More Info
            </Link>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default PackageInfoElementCard;
