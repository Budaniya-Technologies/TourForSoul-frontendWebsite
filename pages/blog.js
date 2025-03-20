import React from "react";
import { useRouter } from "next/router";

const BlogPage = ({ blogInfo }) => {
  const router = useRouter();

  return (
    <div className="my-10 mx-auto px-4 md:px-8 max-w-7xl">
      {/* Title */}
      <div className="flex justify-center mb-8">
        <h2 className="text-4xl md:text-5xl font-bold text-blue-600 border-b-4 border-yellow-400 pb-2 w-max">
          Latest Blog Posts
        </h2>
      </div>

      {/* Handle No Data */}
      {!blogInfo || blogInfo.length === 0 ? (
        <p className="text-center text-lg font-medium text-red-600">
          No blogs found. Please check again later.
        </p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {blogInfo.map((blog) => (
            <div
              key={blog._id}
              className="cursor-pointer transition-transform transform hover:scale-105"
              onClick={() => router.push(`/blogs/${blog.slug}`)}
            >
              <div className="bg-white border border-gray-200 rounded-lg overflow shadow-md hover:shadow-lg transition-shadow">
                {/* Image Section */}
                <div className="relative">
                  <img
                    src={blog.image}
                    alt={blog.title}
                    className="w-full h-52 object-cover"
                  />

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-black bg-opacity-20"></div>

                  {/* Category Badge */}
                  <div className="absolute -top-3 -right-2 bg-blue-500 text-white px-3 py-1 text-sm font-medium rounded-md shadow-md">
                    {blog.category}
                  </div>
                </div>

                {/* Content */}
                <div className="p-4">
                  <h3 className="text-xl font-bold text-blue-500 hover:text-green-500 transition">
                    {blog.title}
                  </h3>

                  <p className="text-gray-700 text-sm mt-2">
                    {blog.description.length > 120
                      ? `${blog.description.substring(0, 120)}...`
                      : blog.description}
                  </p>

                  <button
                    onClick={() => router.push(`/blogs/${blog.slug}`)}
                    className="mt-3 text-blue-600 hover:text-blue-800 font-medium text-sm transition"
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

// Server-Side Data Fetching (SSR)
export async function getServerSideProps() {
  let urlGet = `${process.env.NEXT_PUBLIC_API_URL}apiUser/v1/frontend/getAllBlog?websiteId=${process.env.NEXT_PUBLIC_WEBSITE_ID}`;
  try {
    const res = await fetch(urlGet);
    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }

    const data = await res.json();
    return {
      props: {
        blogInfo: data?.data || [],
      },
    };
  } catch (error) {
    console.error("Error fetching data:", error);
    return {
      props: {
        blogInfo: [],
      },
    };
  }
}

export default BlogPage;
