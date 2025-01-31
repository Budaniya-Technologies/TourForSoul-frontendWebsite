import React from "react";
import Image from "next/image";
import lic from "public/theBagPackerLicence.png";

function licensing() {
  return (
    <div className="my-6">
      <h1 className="text-3xl text-center my-4">Certificate</h1>
      <hr />
      <div className="mx-auto w-1/2 my-5">
        <Image width={700} height={400} alt="lic.." src={lic} />
      </div>
    </div>
  );
}

export default licensing;
