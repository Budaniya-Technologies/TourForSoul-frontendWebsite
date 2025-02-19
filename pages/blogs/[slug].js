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
    <div className="my-10 mx-auto p-8 rounded-lg">
    <div>
      <h3 className="text-5xl font-extrabold text-blue-600 border-b-4 border-yellow-400 pb-5 text-center mx-auto w-max">{blog?.title}</h3>
    </div>
    <div className='my-10' style={{display: 'flex', justifyContent: 'space-evenly'}}>
      <div dangerouslySetInnerHTML={createMarkup(blog?.slugContent)}></div>
    </div>
  </div>
  );
};

export default BlogDetails;
