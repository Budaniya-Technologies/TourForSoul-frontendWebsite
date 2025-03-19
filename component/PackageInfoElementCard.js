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
    <Link href={`/package/${packageInfoLink}`} className="block">
      <div className="w-full bg-white rounded-xl">
        {/* Image Section */}
        <div className="relative h-64 rounded-t-xl ">
          {/* Package Image */}
          <Image
            src={packageImg}
            alt={packageName}
            layout="fill"
            objectFit="cover"
            className="rounded-t-xl"
            onClick={() => dispatch(changeImage(packageImg))}
          />

          {/* Price Badge */}
          <div className="absolute -top-2 -right-2 bg-blue-600 text-white px-4 py-2 text-sm font-bold rounded-full shadow-md z-10">
            {packagePrice}
          </div>
        </div>

        <div className="p-4 bg-white/80 backdrop-blur-md rounded-b-xl">
          <h3 className="text-lg font-bold text-blue-600">{packageName}</h3>
          <h5 className="text-md text-gray-800">{packageDescription}</h5>
          <div className="flex justify-between items-center text-sm text-gray-800 mt-2">
            <div className="flex items-center">
              <FaMapMarkerAlt className="text-red-500 mr-2" />
              <p>
                {packageStartingDest} → {packageEndDest}
              </p>
            </div>
            <div className="flex items-center">
              <FaClock className="text-blue-500 mr-2" />
              <p>{packageDuration}</p>
            </div>
          </div>
          <hr className="mt-5" />
          <div className="mt-4 flex">
            <Link
              href={`/package/${packageInfoLink}`}
              className="flex items-center gap-2 px-5 py-2 text-sm text-white font-medium bg-blue-500 rounded-lg hover:bg-blue-700 transition cursor-pointer"
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
