import PackageInfoElementCard from "@/component/PackageInfoElementCard";
import React, { useEffect, useState } from "react";

function tourpackages({ data }) {
  const [allPackage, setAllPackage] = useState([]);
  useEffect(() => {
    // let AllPack = data.data;
    // setAllPackage(AllPack);
  }, [allPackage]);
  return (
    <div>
      {/* winter track */}
      <div className="w-11/12 m-auto">
        <h2 className="text-3xl font-medium my-3 title-font text-gray-900 mt-2 text-center">
          All Packages
        </h2>
        <hr />
        <div className="flex flex-wrap gap-6">
          {allPackage.map((item, key) => {
            if (item.isActive) {
              return (
                <PackageInfoElementCard
                  key={key}
                  packageName={item.title}
                  packagePrice={`${item.price} /Per (Group Discount Available)`}
                  packageStartingDest={item.pickup}
                  packageEndDest={item.pickup}
                  packageDuration={item.duration}
                  packageInfoLink={item.redirectLink}
                  packageImg={item.image}
                />
              );
            }
          })}
        </div>
      </div>
      <hr />
    </div>
  );
}

// This gets called on every request
export async function getServerSideProps() {
  // Fetch data from external API
  const res = await fetch(`https://api.tourforsoul.in/admin/`);
  const data = await res.json();

  // Pass data to the page via props
  return { props: { data } };
}

export default tourpackages;
