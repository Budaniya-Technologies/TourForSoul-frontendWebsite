import React from "react";
import Image from "next/image";
import MainDisp from "public/mainDisp.jpg";

function HomePageSliderImg() {
  return (
    <div className="h-96">
      <Image
        width={1260}
        height={720}
        src={MainDisp}
        alt="image 1"
        className="h-full w-full object-cover"
      />
    </div>
  );
}

export default HomePageSliderImg;
