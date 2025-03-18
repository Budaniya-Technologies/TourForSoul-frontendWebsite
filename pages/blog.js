import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";

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
      <div className="flex justify-center mb-8">
        <h2 className="text-5xl font-bold text-blue-600 border-b-4 border-yellow-400 pb-2 w-max">
          Latest Blog Posts
        </h2>
      </div>

      {loading ? (
        <p className="text-center text-lg font-medium text-gray-600">
          Loading blogs...
        </p>
      ) : error ? (
        <p className="text-center text-red-600 font-medium">{error}</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-6">
          {blogData.map((blog) => (
            <div
              key={blog._id}
              className="px-4 py-6 cursor-pointer"
              onClick={() => router.push(`/blogs/${blog.slug}`)}
            >
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
                <div className="relative mb-4 rounded-lg overflow-hidden">
                  <div className="absolute top-2 right-2 bg-blue-500 text-white px-3 py-1 rounded-lg text-xs font-semibold shadow-md">
                    {blog.category}
                  </div>

                  <img
                    src={blog.image}
                    alt={blog.title}
                    className="w-full h-56 object-cover rounded-lg"
                  />
                  <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-40 rounded-lg"></div>
                </div>

                <div className="text-left p-6">
                  <h3 className="text-3xl font-extrabold text-blue-500 mb-3 hover:text-green-500 transition duration-300">
                    {blog.title}
                  </h3>

                  <p className="text-gray-800 text-base mb-4 leading-relaxed">
                    {blog.description.length > 150
                      ? `${blog.description.substring(0, 150)}...`
                      : blog.description}
                  </p>
                  <button
                    onClick={() => router.push(`/blogs/${blog.slug}`)}
                    className="text-blue-600 hover:text-blue-800 font-medium text-sm transition duration-300"
                  >
                    Read More...
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

// SSR
export async function getServerSideProps() {
  let urlGet = `${process.env.NEXT_PUBLIC_API_URL}apiUser/v1/frontend/getAllBlog?websiteId=${process.env.NEXT_PUBLIC_WEBSITE_ID}`;
  try {
    const res = await fetch(urlGet);
    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }

    const data = await res.json();
    const blogInfo = data?.data;

    return {
      props: {
        blogInfo,
      },
    };
  } catch (error) {
    console.error("Error fetching data:", error);

    return {
      props: {
        blogInfo: null,
      },
    };
  }
}

export default BlogPage;
