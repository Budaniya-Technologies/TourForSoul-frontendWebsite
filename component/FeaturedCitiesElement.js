import React from "react";
import Image from "next/image";
import SummerImg from "public/SummerTrack.jpg";
import PropTypes from "prop-types";
import Link from "next/link";

function FeaturedCitiesElement(props) {
  let { StylePhoto, StyleName } = props;
  return (
    <div className="relative overflow-hidden max-w-xs my-5 -z-50 ">
      <Link href="/">
        <Image
          className="opacity-80 hover:scale-150 hover:duration-1000 hover:ease-in z-0"
          src={StylePhoto}
          width={400}
          height={400}
          alt="summer track"
        />
        <p className="text-4xl absolute top-1/2 left-10">{StyleName}</p>
      </Link>
    </div>
  );
}

export default FeaturedCitiesElement;

FeaturedCitiesElement.propTypes = {
  StylePhoto: PropTypes.string.isRequired,
  StyleName: PropTypes.string.isRequired,
};

// set defaultprops
FeaturedCitiesElement.defaultProps = {
  StyleName: "wait..",
  StylePhoto: SummerImg,
};
