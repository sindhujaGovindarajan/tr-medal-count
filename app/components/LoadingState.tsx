import React from "react";

/**
 * Displays a loading spinner
 */
const LoadingState: React.FC = () => {
  return (
    <div className="flex justify-center items-center my-12">
      <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      <span className="ml-3 text-gray-700">Loading medal data...</span>
    </div>
  );
};

export default LoadingState;
