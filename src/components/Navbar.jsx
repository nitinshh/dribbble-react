import { useState } from "react";
import "../styles/Navbar.css";

function Navbar() {
  const [showDropdown, setShowDropdown] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  const handleMouseEnter = (dropdown) => {
    setActiveDropdown(dropdown);
    setShowDropdown(true);
  };

  const handleMouseLeave = () => {
    setShowDropdown(false);
    setActiveDropdown(null);
  };

  return (
    <nav className="navbar_container bg-gray-100 shadow-md fixed top-0 w-full z-10">
      <div className="navbar_wrapper flex justify-between items-center px-6 py-8">
        {/* Logo Section */}
        <div className="navbar_logo">
          <img
            src="https://www.svgrepo.com/show/478938/nazi-symbol-3.svg"
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
