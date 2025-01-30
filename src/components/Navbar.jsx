import { useState } from "react";
import "../styles/Navbar.css";

function Navbar() {
  const [showDropdown, setShowDropdown] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");

  const handleMouseEnter = (dropdown) => {
    setActiveDropdown(dropdown);
    setShowDropdown(true);
  };

  const handleMouseLeave = () => {
    setShowDropdown(false);
    setActiveDropdown(null);
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  return (
    <nav className="navbar_container bg-gray-100 shadow-md fixed top-0 w-full z-10">
      <div className="navbar_wrapper flex justify-between items-center px-6 py-8">
        {/* Logo Section */}
        <div className="navbar_logo">
          <img
            src="https://media.istockphoto.com/id/1483051074/vector/whatever-vector-lettering.jpg?s=612x612&w=0&k=20&c=jUsXsXLj-bYMSdPvzCkFKZM1lprQC6PKqjNl_6doV8k="
            alt="Logo"
            className="w-16 h-16"
          />
        </div>

        {/* Menu Section */}
        <ul className="navbar_menu flex text-gray-700">
          <li
            className="relative cursor-pointer"
            onMouseEnter={() => handleMouseEnter("explore")}
            onMouseLeave={handleMouseLeave}
          >
            Explore <span className="down-arrow"></span>
            {showDropdown && activeDropdown === "explore" && (
              <ul className="dropdown_menu">
                <li className="dropdown_item">
                  <i className="fas fa-star mr-2"></i> Popular
                </li>
                <li className="dropdown_item">
                  <i className="fas fa-fire mr-2"></i> New and Noteworthy
                </li>
                <br />
                <li className="dropdown_item">
                  Product Design
                </li>
                <li className="dropdown_item">
                  Web Design
                </li>
                <li className="dropdown_item">
                  Animation
                </li>
                <li className="dropdown_item">
                  Branding
                </li>
                <li className="dropdown_item">
                  Illustration
                </li>
                <li className="dropdown_item">
                  Mobile
                </li>
                <li className="dropdown_item">
                  Typography
                </li>
                <li className="dropdown_item">
                  Print
                </li>
              </ul>
            )}
          </li>

          <li
            className="relative cursor-pointer"
            onMouseEnter={() => handleMouseEnter("hire")}
            onMouseLeave={handleMouseLeave}
          >
            Hire a Designer <span className="down-arrow"></span>
            {showDropdown && activeDropdown === "hire" && (
              <ul className="dropdown_menu">
                <li className="dropdown_item">
                  <i className="fas fa-search mr-2"></i> Browse Designers
                </li>
                <li className="dropdown_item">
                  <i className="fas fa-file-alt mr-2"></i> Submit a Project
                  Brief
                </li>
                <li className="dropdown_item">
                  <i className="fas fa-briefcase mr-2"></i> Post a Job
                </li>
                <li className="dropdown_item">
                  <i className="fas fa-lightbulb mr-2"></i> Hiring on Dribbble
                </li>
              </ul>
            )}
          </li>

          <li className="cursor-pointer ml-4">Find Jobs</li>
          <li className="cursor-pointer ml-4">Blog</li>

          {/* Search Bar Section */}
          <li className="ml-4">
            <div className="search-container">
              <input
                type="text"
                className="search-input"
                value={searchQuery}
                onChange={handleSearchChange}
                placeholder="What are you looking for?"
              />
              <i className="search-icon fas fa-search"></i>
            </div>
          </li>
        </ul>

        {/* Buttons Section */}
        <div className="navbar_buttons flex space-x-4">
          <button className="signup_button px-4 py-2 rounded-lg">
            Sign Up
          </button>
          <button className="signin_button px-4 py-2 rounded-lg">
            Sign In
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
