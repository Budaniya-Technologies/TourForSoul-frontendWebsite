import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { apiGet } from "@/Utils/http";

const BlogDetails = () => {
  const router = useRouter();
  const { slug } = router.query;
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!slug) return;

    const fetchBlogDetails = async () => {
      try {
        const response = await apiGet(
          `apiUser/v1/frontend/getAllBlog/${slug}?websiteId=679b36e0bae402d695b876bf`
        );

        if (response?.data?.data?.length > 0) {
          setBlog(response.data.data[0]); // Store the first blog item
        } else {
          setError("Blog not found.");
        }
      } catch (err) {
        setError("Failed to load blog details. Please try again.");
      } finally {
        setLoading(false);
      }
    };

    fetchBlogDetails();
  }, [slug]);

  if (loading) return <p className="text-center text-lg">Loading...</p>;
  if (error) return <p className="text-center text-red-500">{error}</p>;

  return (
    <div className="p-6 bg-white min-h-screen">
      {/* Title Section */}
      <div className="flex justify-center mb-8">
        <h2 className="text-5xl font-bold text-blue-600 border-b-4 border-yellow-400 pb-2 text-center">
          Blog Info
        </h2>
      </div>

      {/* Blog Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="max-w-xs w-full bg-white shadow-lg rounded-lg overflow-hidden">
            {/* Blog Image with Overlay */}
            {blog?.image && (
              <div className="relative">
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-100 h-60 object-cover rounded-t-lg"
                />
              </div>
            )}

            <div className="p-4">
              {/* Blog Title with Gradient Header */}
              <h1 className="text-lg font-extrabold text-blue-500 mb-2 hover:text-green-500 transition duration-300">
                {blog?.title}
              </h1>

              {/* Category with Styled Uppercase Text */}
              <p className="text-indigo-500 text-xs mb-2 uppercase tracking-wider">
                Category: {" "}
                <span className="font-semibold text-indigo-700">{blog?.category}</span>
              </p>

              {/* Blog Description */}
              <p className="text-gray-700 text-sm leading-relaxed mb-2">
                {blog?.description}
              </p>

              {/* Rendered Blog Content */}
              <div
                className="text-gray-800 text-sm leading-relaxed border-t pt-2"
                dangerouslySetInnerHTML={{ __html: blog?.slugContent }}
              ></div>

              {/* Back to Blogs Button */}
              <button
                onClick={() => router.push("/blog")}
                className="mt-3 bg-blue-600 text-white px-3 py-1 rounded-lg shadow-md hover:bg-blue-700 transition duration-300"
              >
                Back to Blogs
              </button>
            </div>
          </div>
      </div>
    </div>
  );
};

export default BlogDetails;
