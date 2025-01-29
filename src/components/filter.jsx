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
        <div className="filter-section mt-4 p-4 border shadow-md text-black flex gap-6">
          <div>
            <p>Tags</p>
            <input type="text" className="border p-2" />
          </div>
          <div>
            <p>Color</p>
            <input
              type="text"
              placeholder="Enter hex or select"
              className="border p-2"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Filter;
