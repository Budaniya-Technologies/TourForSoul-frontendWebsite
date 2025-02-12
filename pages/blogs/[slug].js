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
      <h3 className='text-2xl text-center my-3'>{blog?.title}</h3>
      <hr className='h-1 w-100 bg-green-950 rounded-lg' />
    </div>

    {/* pickup and drop website */}
    {/* <div className='my-5 flex justify-center flex-wrap items-center'>
      <div className='my-3 text-center'>
        <div className='flex justify-center'><CurrencyRupeeIcon /></div>
        <h5 className='text-lg'>Starting Price</h5>
        <h5 className='text-lg'>{packageData?.price}/-</h5>
      </div>
      <div className='my-3'>
        <h5 className='text-lg'><span>Duration :- </span>{packageData?.duration}</h5>
      </div>
      <div className='my-3'>
        <h5 className='text-lg'><span>Pickup && Drop :- </span>{packageData?.pickUpPoint}</h5>
      </div>
    </div> */}
    {/* image section */}
    {/* <div>
      <Image className='m-auto b-4 rounded-lg' src={packageData?.image} width={500}
        height={500}
        alt="package image" />
    </div> */}
    {/* slug content */}
    <div className='my-10'>
      <div dangerouslySetInnerHTML={createMarkup(blog?.slugContent)}></div>
    </div>
  </div>
    // <div className="w-full min-h-screen bg-white p-10 mt-20">
      
    //       {/* Blog Information Heading */}
    //       <h2 className="text-5xl font-extrabold text-blue-600 border-b-4 border-yellow-400 pb-5 text-center mx-auto w-max">
    //         Blog Information
    //       </h2>

    //   <div className="w-full mx-0 p-0">
    //     {/* Image (Full Left Start) */}
    //     {blog?.image && (
    //       <div className="w-full flex justify-start mb-6 p-0">
    //         <img
    //           src={blog.image}
    //           alt={blog.title}
    //           className="w-[500px] h-[300px] object-cover rounded-lg shadow-md m-0 p-0"
    //         />
    //       </div>
    //     )}

    //     {/* Blog Content (Starts from Absolute Left) */}
    //     <div className="w-full p-0 m-0">
    //       {/* Blog Title */}
    //       <h1 className="text-3xl font-extrabold text-gray-900 mb-4 p-0 m-0">
    //         {blog?.title}
    //       </h1>

    //       {/* Blog Meta Info */}
    //       <p className="text-gray-600 text-base mb-4 p-0 m-0">
    //         <span className="font-semibold">Category:</span>{" "}
    //         <span className="text-blue-600">{blog?.category}</span>
    //       </p>

    //       {/* Blog Description */}
    //       <p className="text-gray-800 text-lg leading-relaxed mb-6 p-0 m-0">
    //         {blog?.description}
    //       </p>

    //       {/* Blog Content (Rich HTML Content) */}
    //       <div
    //         className="text-gray-900 text-lg leading-relaxed border-t pt-6 p-0 m-0"
    //         dangerouslySetInnerHTML={{ __html: blog?.slugContent }}
    //       ></div>

    //       {/* Back to Blogs Button */}
    //       <div className="mt-8">
    //         <button
    //           onClick={() => router.push("/blog")}
    //           className="bg-blue-600 text-white px-6 py-2 rounded-full shadow-md hover:bg-blue-700 transition duration-300"
    //         >
    //           Back to Blogs
    //         </button>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
};

export default BlogDetails;
