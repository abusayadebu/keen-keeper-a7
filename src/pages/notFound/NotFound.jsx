import React from "react";
import { Link } from "react-router";

const NotFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white px-6">
      <div className="text-center max-w-md">

        {/* 404 */}
        <h1 className="text-[110px] md:text-[150px] font-extrabold text-[#244D3F] leading-none">
          404
        </h1>

        {/* Title */}
        <h2 className="text-2xl md:text-3xl font-bold text-[#244D3F] mt-2">
          Page not found
        </h2>

        {/* Description */}
        <p className="text-gray-500 mt-3 text-sm md:text-base leading-relaxed">
          The page you are looking for doesn’t exist or has been moved.
          Please check the URL or return to the homepage.
        </p>

        {/* Button */}
        <div className="mt-8 flex justify-center">
          <Link
            to="/"
            className="px-6 py-3 rounded-full bg-[#244D3F] text-white font-semibold shadow-md hover:bg-[#1e3d33] transition-all duration-300"
          >
            Go Home
          </Link>
        </div>

        {/* Small note */}
        <p className="text-gray-400 text-xs mt-6">
          Error code: 404
        </p>
      </div>
    </div>
  );
};

export default NotFound;