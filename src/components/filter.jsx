import { useState } from "react";
import { ChevronRight, ChevronLeft } from "lucide-react";

const Filter = () => {
  const [expanded, setExpanded] = useState(false);
  const [showFilter, setShowFilter] = useState(false);

  const categories = [
    "Discover",
    "Animation",
    "Branding",
    "Illustration",
    "Mobile",
    "Print",
    "Product Design",
  ];
  const extraCategories = ["Typography", "Web Design"];

  return (
    <div className="filter_main p-4 border-b text-black">
      <div className="flexing items-center justify-between w-full">
        {/* Left Side: Popular */}
        <div className="left">
          <p>Popular</p>
        </div>

        {/* Center: Categories */}
        <div className="center">
          {categories.map((category) => (
            <span key={category} className="category">
              {category}
            </span>
          ))}
          {expanded &&
            extraCategories.map((category) => (
              <span key={category} className="category">
                {category}
              </span>
            ))}
          <span className="expand-icon" onClick={() => setExpanded(!expanded)}>
            {expanded ? <ChevronLeft size={20} /> : <ChevronRight size={20} />}
          </span>
        </div>

        {/* Right Side: Filter */}
        <div className="right">
          <span
            className="filter-btn"
            onClick={() => setShowFilter(!showFilter)}
          >
            Filter
          </span>
        </div>
      </div>

      {/* Filter Section */}
      {showFilter && (
        <div className="filter-section mt-4 p-6 rounded-lg shadow-lg bg-white border border-gray-200">
          <div className="flex gap-8">
            <div className="flex-1">
              <p className="text-lg font-semibold text-gray-700">Tags</p>
              <input
                type="text"
                placeholder="Enter tag"
                className="mt-2 w-full p-3 rounded-md border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>
            <div className="flex-1">
              <p className="text-lg font-semibold text-gray-700">Color</p>
              <input
                type="text"
                placeholder="Enter hex code"
                className="mt-2 w-full p-3 rounded-md border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Filter;
