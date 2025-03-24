import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";

export async function getServerSideProps(context) {
  const { slug } = context?.query;
  let urlGet = `${process.env.NEXT_PUBLIC_API_URL}apiUser/v1/frontend/getAllBlog/${slug}?websiteId=${process.env.NEXT_PUBLIC_WEBSITE_ID}`
  console.log(urlGet)
  try {
    const res = await fetch(urlGet);
    if (!res.ok) {
      throw new Error('Failed to fetch data');
    }

    const data = await res.json();
    const blogInfo = data?.data[0]

    return {
      props: {
        blogInfo,  
      },
    };
  } catch (error) {
    console.error('Error fetching data:', error);

    return {
      props: {
        blogInfo: [], 
      },
    };
  }
}

const BlogDetails = ({blogInfo}) => {
  function createMarkup(c) {
    return { __html: c };
  }
  const router = useRouter();
  const { slug } = router.query;
  const [blog, setBlog] = useState({blogInfo});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (blogInfo !== null) {
      setBlog(blogInfo);
    } else {
      setError('No packages available.');
    }
  }, [blogInfo]);

  return (
    <div className="relative min-h-screen flex items-center justify-center">
    {/* Background Image with Opacity */}
    <div
      className="absolute inset-0 bg-cover bg-center"
      style={{
        backgroundImage: "url('/bg-travel1.jpg')",
        opacity: 0.4, 
        filter: 'brightness(80%)', 
      }}
    ></div>
    {/* Main Content */}
    <div className="relative z-10 p-8 bg-white bg-opacity-90 rounded-lg shadow-lg w-100 text-left m-5">
      <h3 className="text-5xl font-extrabold text-blue-600 border-b-4 border-yellow-400 pb-5">
        {blogInfo?.title || 'blog Info'}
      </h3>

      <div className="my-10 text-lg text-gray-700">
        {error ? (
          <p className="text-red-500 font-bold">{error}</p>
        ) : (
          <div dangerouslySetInnerHTML={createMarkup(blogInfo?.slugContent || '')}></div>
        )}
      </div>
    </div>
  </div>
  );
};

export default BlogDetails;
