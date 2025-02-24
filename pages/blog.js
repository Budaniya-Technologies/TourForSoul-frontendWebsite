import React, { useState, useEffect } from "react";
import { apiGet } from "@/Utils/http";
import { useRouter } from "next/router";

const getAllBlogs =
  "apiUser/v1/frontend/getAllBlog/?websiteId=679b36e0bae402d695b876bf";

const BlogPage = ({ blogInfo }) => {
  const [blogData, setBlogData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const router = useRouter();

  useEffect(() => {
    if (blogInfo !== null) {
      setBlogData(blogInfo);
      setLoading(false);
    } else {
      setError("Failed to load blogs. Please try again later.");
      setLoading(false);
    }
  }, []);

  return (
    <div className="my-10 mx-auto p-8 rounded-lg max-w-7xl bg-gray-50">
      {/* Heading styled and centered */}
      <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-blue-600 border-b-4 border-yellow-400 pb-2 w-max">
        Latest Blog Posts
      </h2>

      {loading ? (
        <p className="text-center text-lg font-medium text-gray-600">
          Loading blogs...
        </p>
      ) : error ? (
        <p className="text-center text-red-600 font-medium">{error}</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-6">
          {blogData.map((blog) => (
            <div key={blog._id} className="px-4 py-6">
              <div className="bg-white p-6 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300 hover:shadow-2xl">
                {/* Image Section with dark overlay */}
                <div className="relative mb-4 rounded-lg overflow-hidden">
                  <img
                    src={blog.image}
                    alt={blog.title}
                    className="w-full h-56 object-cover rounded-lg"
                  />
                  <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-40 rounded-lg"></div>
                </div>

                <div className="text-left p-6  rounded-lg shadow-md  transition duration-300">
                  {/* Title with bold and clean style */}
                  <h3 className="text-3xl font-extrabold text-blue-500 mb-3 hover:text-green-500 transition duration-300">
                    {blog.title}
                  </h3>

                  {/* Description with new text and background */}
                  <p className="text-gray-800 text-base mb-4 leading-relaxed">
                    {blog.description.length > 150
                      ? `${blog.description.substring(0, 150)}...`
                      : blog.description}
                  </p>

                  {/* Category Text with a clean, uppercase style */}
                  <p className="text-indigo-500 text-xs mb-2 uppercase tracking-wider">
                    Category:{" "}
                    <span className="font-semibold text-indigo-700">
                      {blog.category}
                    </span>
                  </p>

                  {/* Read More Link with new hover effect */}
                  <button
                    onClick={() => router.push(`/blogs/${blog.slug}`)}
                    className="text-blue-600 hover:text-blue-800 font-medium text-sm transition duration-300"
                  >
                    Read More
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

// ssr
export async function getServerSideProps() {
  let urlGet = `${process.env.NEXT_PUBLIC_API_URL}apiUser/v1/frontend/getAllBlog?websiteId=${process.env.NEXT_PUBLIC_WEBSITE_ID}`
  try {
    const res = await fetch(urlGet);
    if (!res.ok) {
      throw new Error('Failed to fetch data');
    }

    const data = await res.json();
    const blogInfo = data?.data

    return {
      props: {
        blogInfo,  // this is required and must be an object
      },
    };
  } catch (error) {
    console.error('Error fetching data:', error);

    // Return an empty object or fallback data in case of error
    return {
      props: {
        blogInfo: null,  // Or some default value
      },
    };
  }
}

export default BlogPage;
