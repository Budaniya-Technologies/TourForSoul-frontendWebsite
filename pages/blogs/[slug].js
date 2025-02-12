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
      {/* <hr className='h-1 w-100 bg-green-950 rounded-lg' /> */}
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
  );
};

export default BlogDetails;
