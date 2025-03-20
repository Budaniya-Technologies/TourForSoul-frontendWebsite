import React, { useState } from "react";
import { FaMountain, FaPalette, FaUmbrellaBeach, FaMapMarkerAlt, FaPray } from "react-icons/fa";

const categories = [
  { name: "Attractions", icon: <FaMountain /> },
  { name: "Art & Culture", icon: <FaPalette /> },
  { name: "Picnic Spots", icon: <FaUmbrellaBeach /> },
  { name: "Regions", icon: <FaMapMarkerAlt /> },
  { name: "Spirituality", icon: <FaPray /> },
];

const attractionsData = {
    "Attractions": [
      { title: "Hills", image: "https://www.tnnews24air.com/storage/gallery/U9y1I4h8R2fsZZeprYsew1u7qRhZMpvYmY1IHJax.jpg" },
      { title: "Beaches", image: "https://img.freepik.com/premium-photo/beach-collage_328046-30884.jpg?w=360" },
      { title: "Backwaters", image: "https://m.media-amazon.com/images/I/817jnSjQqBL._AC_UF894,1000_QL80_.jpg" },
    ],
    "Art & Culture": [
      { title: "Museums", image: "https://assets.thehansindia.com/h-upload/2023/05/17/1351859-museums.webp" },
      { title: "Theaters", image: "https://res.cloudinary.com/purnesh/image/upload/w_540,f_auto/untitled-11689324737808.jpg" },
      { title: "Festivals", image: "https://www.adotrip.com/public/images/blogs/master_images/60ec014d80f6f-Master_Image_Blog.jpg" },
    ],
    "Picnic Spots": [
      { title: "Parks", image: "https://superadmin.homes247.in/images/stories/1701944523-Top%20National%20Parks%20in%20India%20-%20Homes247.in.jpg" },
      { title: "Gardens", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrZxfno5bobOeq_dBsIIXmut5HXMBpcO3Smw&s" },
      { title: "Riverside", image: "https://media.istockphoto.com/id/1209276970/photo/mature-man-pauses-on-wooden-pier-looks-out-across-lake.jpg?s=612x612&w=0&k=20&c=Cnc5LDLjIwgyYm0bHoRgHzGqbJW9x2-04BhiwYrMpkA=" },
    ],
    "Regions": [
      { title: "Mountains", image: "https://m.media-amazon.com/images/I/61inkqDn4YL._AC_UF894,1000_QL80_.jpg" },
      { title: "Lakes", image: "https://img.freepik.com/premium-photo/collage-four-images-showing-lake-forest-different-seasons_36682-204975.jpg" },
      { title: "Forests", image: "https://ogden_images.s3.amazonaws.com/www.motherearthnews.com/images/2022/07/14132248/how-to-build-an-A-frame-451x300.jpg" },
    ],
    "Spirituality": [
      { title: "Temples", image: "https://5.imimg.com/data5/SELLER/Default/2023/8/331294587/UO/KD/ZD/34744905/south-indian-temples-tour-packages-500x500.jpg" },
      { title: "Churches", image: "https://theromanguy.com/wp-content/uploads/19-Astounding-Facts-about-St.-Peters-Basilica-1440-x-675.jpg" },
      { title: "Mosques", image: "https://i0.wp.com/www.myticklefeet.com/wp-content/uploads/2017/12/IMG_3163-2-low-res.jpg?fit=600%2C359&ssl=1" },
    ],
  };

const AttractionsComponent = () => {
  const [selectedCategory, setSelectedCategory] = useState("Attractions");

  return (
    <div className="p-6">
       <div className="flex justify-center mb-8">
        <h2 className="text-4xl md:text-5xl font-bold text-blue-600 border-b-4 border-yellow-400 pb-2 w-max">
        Explore Attractions
        </h2>
      </div>
      

      <div className="flex flex-wrap gap-4 justify-center border-b pb-4">
        {categories.map((category, index) => (
          <div
            key={index}
            onClick={() => setSelectedCategory(category.name)}
            className={`flex items-center space-x-2 cursor-pointer px-3 py-2 rounded-md ${
              selectedCategory === category.name
                ? "text-orange-500 border-b-2 border-orange-500"
                : "text-gray-600"
            }`}
          >
            {category.icon}
            <span>{category.name}</span>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-6">
        {attractionsData[selectedCategory].map((item, index) => (
          <div key={index} className="relative rounded-lg overflow-hidden shadow-lg">
            <img src={item.image} alt={item.title} className="w-full h-48 object-cover" />
            <div className="absolute bottom-4 left-4 text-white text-lg font-bold bg-black bg-opacity-50 px-2 py-1 rounded">
              {item.title} &gt;
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AttractionsComponent;
