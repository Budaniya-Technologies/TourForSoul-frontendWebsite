import React from "react";
import PropTypes from "prop-types";
import Link from "next/link";
import Image from "next/image";

function PackageInfoElementCard(props) {
  const {
    packageName,
    packagePrice,
    packageStartingDest,
    packageEndDest,
    packageImg,
    packageDuration,
    packageInfoLink,
  } = props;

  return (
    <div className="m-5">
      <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-2xl">
        {/* Package Image */}
        <Image
          className="rounded-t-lg"
          width={400}
          height={250}
          src={packageImg}
          alt={`${packageName} image`}
        />
        
        {/* Package Details */}
        <div className="p-5">
          <h5 className="mb-2 text-xl font-semibold text-gray-800">{packageName}</h5>
          <hr className="my-2" />
          
          <div className="mb-4">
            {/* Pickup Location */}
            <div className="flex justify-between mt-4">
              <p className="text-gray-600">Pickup : <span className="font-semibold">{packageStartingDest}</span></p>
            </div>

            {/* Drop Location */}
            <div className="flex justify-between mt-4">
              <p className="text-gray-600">Drop : <span className="font-semibold">{packageEndDest}</span></p>
            </div>

            {/* Duration */}
            <div className="flex justify-between mt-4">
              <p className="text-gray-600">Duration : <span className="font-semibold">{packageDuration}</span></p>
            </div>

            {/* Price */}
            <div className="flex justify-between mt-4">
              <p className="text-gray-600">Price : <span className="font-semibold text-xl">&#8377; {packagePrice}</span></p>
            </div>
          </div>
          
          <hr className="my-2" />

          {/* View More Link */}
          <Link href={packageInfoLink} target="_blank">
            <div className="text-white bg-blue-600 hover:bg-blue-700 rounded-lg py-2 mt-2 text-center transition-colors">
              Complete Information
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

PackageInfoElementCard.propTypes = {
  packageName: PropTypes.string.isRequired,
  packagePrice: PropTypes.string.isRequired,
  packageStartingDest: PropTypes.string.isRequired,
  packageEndDest: PropTypes.string.isRequired,
  packageImg: PropTypes.string.isRequired,
  packageInfoLink: PropTypes.string.isRequired,
  packageDuration: PropTypes.string.isRequired,
};

// Default Props for Package Info Element Card
PackageInfoElementCard.defaultProps = {
  packageName: "Coming Soon",
  packagePrice: "00.00",
  packageStartingDest: "Wait...",
  packageEndDest: "Wait...",
  packageInfoLink: "https://teckiajay.com",
  packageDuration: "0 Day / 0 Night",
  packageImg: "https://cdn.pixabay.com/photo/2018/08/29/22/52/woman-3640935_1280.jpg",
};

export default PackageInfoElementCard;
