// import React from "react";

function Banner() {
  return (
    <div className="main_content flex h-screen w-full">
      <div className="main_heading">
        <h1 className="text-3xl font-bold text-gray-900">
          Discover the world’s top designers
        </h1>
        <p className="text-lg text-gray-600 mt-2">
          Explore work from the most talented and accomplished designers ready
          to take on your next project
        </p>

        {/* Trending Searches */}
        <div className="mt-6 flex justify-center space-x-4 text-blue-500 font-semibold text-sm">
          <span className="header_links">Landing Page</span>
          <span className="header_links">E-commerce</span>
          <span className="header_links">Mobile App</span>
          <span className="header_links">Logo Design</span>
          <span className="header_links">Dashboard</span>
          <span className="header_links">Icons</span>
        </div>
      </div>
    </div>
  );
}

export default Banner;
