import { useRouter } from "next/router";
import Image from "next/image";
import Link from "next/link";
import { FaMapMarkerAlt, FaClock, FaInfoCircle } from "react-icons/fa";

const PackageInfoElementCard = ({
  packageName,
  packageDescription,
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
      <div className="w-full bg-white rounded-xl overflow-hidden">
        {/* Image Section */}
        <div className="relative h-64">
          <Image
            src={packageImg}
            alt={packageName}
            layout="fill"
            objectFit="cover"
            className="rounded-t-xl"
          />
          <div className="absolute top-0 right-1 bg-blue-600 text-white px-4 py-1 text-sm font-bold rounded-full shadow-md">
            {packagePrice}
          </div>
        </div>

        {/* Content Section with Transparent Background */}
        <div className="p-4 bg-white/80 backdrop-blur-md rounded-b-xl">
          <h3 className="text-lg font-bold text-blue-600">{packageName}</h3>
          <h5 className="text-md text-gray-800">{packageDescription}</h5>

          {/* Duration & Destination in One Row */}
          <div className="flex justify-between items-center text-sm text-gray-800 mt-2">
            {/* Destination */}
            <div className="flex items-center">
              <FaMapMarkerAlt className="text-red-500 mr-2" />
              <p>
                {packageStartingDest} → {packageEndDest}
              </p>
            </div>

            {/* Duration */}
            <div className="flex items-center">
              <FaClock className="text-blue-500 mr-2" />
              <p>{packageDuration}</p>
            </div>
          </div>

          {/* More Info Button */}
          <div className="mt-4 flex">
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
