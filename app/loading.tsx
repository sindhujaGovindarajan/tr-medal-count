import React from "react";
import LoadingState from "./components/LoadingState";

/**
 * Loading component for the application
 */
export default function Loading() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-2xl font-bold mb-6 text-center">
          Olympic Medal Count
        </h1>
        <LoadingState />
      </div>
    </div>
  );
}
