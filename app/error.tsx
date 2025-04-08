"use client";

import React from "react";

interface ErrorPageProps {
  error: Error;
  reset: () => void;
}

/**
 * Error boundary for the application
 */
const ErrorPage: React.FC<ErrorPageProps> = ({ error, reset }) => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="text-center">
        <h1 className="text-2xl font-bold text-red-600 mb-2">
          Something went wrong
        </h1>
        <p className="text-gray-700 mb-4">{error.message}</p>
        <button
          onClick={reset}
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 focus:outline-none"
        >
          Try again
        </button>
      </div>
    </div>
  );
};

export default ErrorPage;
