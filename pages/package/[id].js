import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { Swiper, SwiperSlide } from 'swiper/react';
import { apiGet } from '@/Utils/http';
import PackageInfoElementCard from '@/component/PackageInfoElementCard';

const getAllPackage = 'apiUser/v1/frontend/getPackage/test-data?websiteId=679b36e0bae402d695b876bf';

function PackageInfo() {
  const router = useRouter();
  const { id } = router.query;

  const [packageData, setPackageData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    apiGet(getAllPackage)
      .then((response) => {
        if (response?.status === 200 && Array.isArray(response?.data?.data)) {
          setPackageData(response.data.data);
        } else {
          setError('No packages available.');
        }
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
        setError('Failed to load packages.');
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <div className="my-10 mx-auto p-8 rounded-lg">
      <style jsx>{`
        .package-card-container img {
          height: 200px;
          object-fit: cover;
          width: 100%;
        }
      `}</style>

      {/* Centered Heading */}
      <div className="flex justify-center mb-8">
        <h2 className="text-5xl font-bold text-blue-600 border-b-4 border-yellow-400 pb-2 w-max">
          Trekking Tours Package Info
        </h2>
      </div>

      <div className="package-slider-container">
        {loading && <p>Loading packages...</p>}
        {error && <p className="text-red-600">{error}</p>}

        {!loading && !error && packageData.length > 0 && (
          <Swiper
            slidesPerView={3} // Show 3 cards at a time
            spaceBetween={30} // Space between cards
            loop={true}
            breakpoints={{
              640: { slidesPerView: 1, spaceBetween: 10 },
              768: { slidesPerView: 2, spaceBetween: 20 },
              1024: { slidesPerView: 3, spaceBetween: 30 },
            }}
          >
            {packageData.map((item, key) => (
              <SwiperSlide key={key} className="package-card-container px-4 py-6">
                <div className="bg-white p-6 rounded-lg shadow-xl transform transition-all hover:scale-105 hover:shadow-2xl">
                  <PackageInfoElementCard
                    packageName={item.title || 'N/A'}
                    packagePrice={`${item.price || 'N/A'} / Per`}
                    packageStartingDest={item.pickUpPoint || 'N/A'}
                    packageEndDest={item.dropPoint || 'N/A'}
                    packageDuration={item.duration || 'N/A'}
                    packageImg={item.image || '/default-image.jpg'}
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        )}
      </div>
    </div>
  );
}

export default PackageInfo;
