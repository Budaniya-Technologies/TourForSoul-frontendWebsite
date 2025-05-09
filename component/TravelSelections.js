import React, { useEffect, useState } from "react";
import { apiGet } from "@/Utils/http";

const getCategoryAPI = `/apiAdmin/v1/category?websiteId=${process.env.NEXT_PUBLIC_WEBSITE_ID}`;

const AttractionsComponent = () => {
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);

  useEffect(() => {
    const fetchCategory = async () => {
      try {
        const response = await apiGet(getCategoryAPI);
        // console.log(response.data);
        if (response?.data?.length > 0) {
          setCategories(response.data);
          setSelectedCategory(response.data[0]);
        }
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };

    fetchCategory();
  }, []);

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
            onClick={() => setSelectedCategory(category)}
            className={`flex items-center space-x-2 cursor-pointer px-3 py-2 rounded-md ${
              selectedCategory?.categoryName === category.categoryName
                ? "text-orange-500 border-b-2 border-orange-500"
                : "text-gray-600"
            }`}
          >
            <img src={category.icon} alt={category.categoryName} className="w-6 h-6 object-cover rounded-full" />
            <span>{category.categoryName}</span>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-6">
        {selectedCategory?.subcategories?.map((sub, index) => (
          <div key={index} className="relative rounded-lg overflow-hidden shadow-lg">
            <img src={sub.image} alt={sub.name} className="w-full h-48 object-cover" />
            <div className="absolute bottom-4 left-4 text-white text-lg font-bold bg-black bg-opacity-50 px-2 py-1 rounded">
              {sub.name} &gt;
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AttractionsComponent;
