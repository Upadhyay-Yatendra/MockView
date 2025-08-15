// loading.jsx (Skeleton Component)
import React from "react";


// Skeleton not working as of now . This needs to be fixed

const LoadingSkeleton = () => {
  return (
    <div>
      <h2 className="font-medium text-xl">Previous Interviews</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-3">
        {/* Skeleton Items */}
        {[...Array(3)].map((_, index) => (
          <div key={index} className="border shadow-sm rounded-sm p-3 animate-pulse">
            <div className="h-4 bg-gray-300 rounded w-3/4 mb-2"></div>
            <div className="h-3 bg-gray-300 rounded w-1/2 mb-4"></div>
            <div className="h-3 bg-gray-200 rounded w-1/4 mb-4"></div>

            <div className="flex justify-between gap-5 mt-2">
              <div className="w-full h-8 bg-gray-300 rounded"></div>
              <div className="w-full h-8 bg-gray-300 rounded"></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LoadingSkeleton;
