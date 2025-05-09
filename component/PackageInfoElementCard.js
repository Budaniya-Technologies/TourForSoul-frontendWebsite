import { useRouter } from "next/router";
import Image from "next/image";
import Link from "next/link";
import { FaMapMarkerAlt, FaClock, FaInfoCircle } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { changeImage } from "@/redux/slice/packageImage";

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
  const dispatch = useDispatch();

  return (
    <Link href={`/package${packageInfoLink}`} className="block">
      <div className="relative bg-white border border-gray-200 rounded-xl overflow transition-all duration-300 mx-4">
        {/* Image Section */}
        <div className="relative h-64 w-full">
          <Image
            src={packageImg}
            alt={packageName}
            layout="fill"
            objectFit="cover"
            className="rounded-t-xl transition-transform duration-300 hover:scale-105"
            onClick={() => dispatch(changeImage(packageImg))}
          />

          {/* Price Badge */}
          <div className="absolute -top-2 -right-2 bg-blue-600 text-white px-4 py-2 text-sm font-bold rounded-full shadow-md z-10">
            {packagePrice}
          </div>
        </div>

        {/* Package Details */}
        <div className="p-5">
          <h3 className="text-lg font-semibold text-gray-800">{packageName}</h3>
          <p className="text-sm text-gray-600 mt-2">
  {packageDescription.length > 20 ? packageDescription.substring(0, 20) + "..." : packageDescription}
</p>

          {/* Travel Route & Duration */}
          <div className="flex justify-between items-center text-sm text-gray-700 mt-4">
            <div className="flex items-center gap-2">
              <FaMapMarkerAlt className="text-red-500" />
              <p>{packageStartingDest} → {packageEndDest}</p>
            </div>
            <div className="flex items-center gap-2">
              <FaClock className="text-blue-500" />
              <p>{packageDuration}</p>
            </div>
          </div>
          <hr className="mt-4"/>

          {/* More Info Button */}
          <div className="mt-5">
            <Link
              href={`/package${packageInfoLink}`}
              className="flex items-center justify-center gap-2 w-full py-2 text-white text-sm font-medium bg-blue-600 rounded-md hover:bg-blue-700 transition-all duration-300"
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
