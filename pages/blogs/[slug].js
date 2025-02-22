import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { apiGet } from "@/Utils/http";

const BlogDetails = () => {
  function createMarkup(c) {
    return { __html: c };
  }
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
    <div className="relative min-h-screen flex items-center justify-center">
    {/* Background Image with Opacity */}
    <div
      className="absolute inset-0 bg-cover bg-center"
      style={{
        backgroundImage: "url('/bg-travel1.jpg')",
        opacity: 0.4, // Adjust opacity (0.1 - 1)
        filter: 'brightness(80%)', // Adjust brightness if needed
      }}
    ></div>
    {/* Main Content */}
    <div className="relative z-10 p-8 bg-white bg-opacity-90 rounded-lg shadow-lg w-100 text-left m-5">
      <h3 className="text-5xl font-extrabold text-blue-600 border-b-4 border-yellow-400 pb-5">
        {blog?.title || 'Package Info'}
      </h3>

      <div className="my-10 text-lg text-gray-700">
        {error ? (
          <p className="text-red-500 font-bold">{error}</p>
        ) : (
          <div dangerouslySetInnerHTML={createMarkup(blog?.slugContent || '')}></div>
        )}
      </div>
    </div>
  </div>
  );
};

export default BlogDetails;
