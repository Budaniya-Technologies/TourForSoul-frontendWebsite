import { useState, useEffect } from 'react';
import PackageInfoElementCard from './PackageInfoElementCard'; 
import { apiGet } from '@/Utils/http';
const getAllPackage = 'apiUser/v1/frontend/getAllPackage?websiteId=679b36e0bae402d695b876bf'

function PackageInfo() {
  const [packageData, setPackageData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    apiGet(getAllPackage)
      .then(response => {
        if (response?.status === 200 && Array.isArray(response?.data?.data)) {
          setPackageData(response.data.data); 
          setLoading(false);
        } else {
          setError('No packages available.');
          setLoading(false);
        }
      })
      .catch(error => {
        console.error('Error fetching data:', error);
        setError('Failed to load packages.'); 
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
          Trekking Tours Package
        </h2>
      </div>

      <div className="package-slider-container">
        {loading && <p>Loading packages...</p>}

        {error && <p>{error}</p>}

        {packageData.length > 0 && !loading && !error && (
          packageData.map((item, key) => {
            return (
              <div key={key} className="package-card-container px-4 py-6">
                <div className="bg-white p-6 rounded-lg shadow-xl transform transition-all hover:scale-105 hover:shadow-2xl">
                  <PackageInfoElementCard
                    packageName={item.title || 'N/A'}
                    packagePrice={`${item.price || 'N/A'} /Per`}
                    packageStartingDest={item.pickUpPoint || 'N/A'}
                    packageEndDest={item.dropPoint || 'N/A'}
                    packageDuration={item.duration || 'N/A'}
                    packageInfoLink={`/packages/${item.slug}`}
                    packageImg={item.image || '/default-image.jpg'} 
                  />
                </div>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
}

export default PackageInfo;
