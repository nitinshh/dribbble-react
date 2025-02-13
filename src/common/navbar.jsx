import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import "../styles/Navbar.css";
import axios from "axios";

function Navbar() {
  // const [showDropdown, setShowDropdown] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    // Retrieve user data from local storage
    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (storedUser) {
      setUser(storedUser);
    }
  }, []);

  const handleLogout = async () => {
    try {
      // Get token from localStorage
      const token = localStorage.getItem("token");

      if (!token) {
        Swal.fire({
          icon: "error",
          title: "Logout Failed",
          text: "No user logged in.",
        });
        return;
      }

      await axios.post(
        "http://localhost:3000/users/logout",
        { deviceToken: "abc" },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      localStorage.removeItem("token");
      localStorage.removeItem("user");

      setUser(null);

      Swal.fire({
        icon: "success",
        title: "Logged Out",
        text: "You've logged out successfully!",
        timer: 3000,
        showConfirmButton: false,
        toast: true,
        position: "top-end",
      });

      setTimeout(() => {
        navigate("/");
      }, 3000);
    } catch (error) {
      console.error("Logout Error:", error);
      Swal.fire({
        icon: "error",
        title: "Logout Failed",
        text: error.response?.data?.message || "Something went wrong!",
      });
    }
  };

  return (
    <nav className="navbar_container bg-gray-100 shadow-md fixed top-0 w-full z-10">
      <div className="navbar_wrapper flex justify-between items-center px-6 py-8">
        {/* Logo Section */}
        <div className="navbar_logo">
          <Link to="/">
            <img
              src="https://media.istockphoto.com/id/1483051074/vector/whatever-vector-lettering.jpg?s=612x612&w=0&k=20&c=jUsXsXLj-bYMSdPvzCkFKZM1lprQC6PKqjNl_6doV8k="
              alt="Logo"
              className="w-16 h-16"
            />
          </Link>
        </div>

        {/* Menu Section */}
        <ul className="navbar_menu flex text-gray-700">
          <li
            className="relative cursor-pointer"
            onMouseEnter={() => setActiveDropdown("explore")}
            onMouseLeave={() => setActiveDropdown(null)}
          >
            Explore <span className="down-arrow"></span>
            {activeDropdown === "explore" && (
              <ul className="dropdown_menu">
                <li className="dropdown_item_up">Popular</li>
                <li className="dropdown_item_up">New and Noteworthy</li>
                <br />
                <li className="dropdown_item">Product Design</li>
                <li className="dropdown_item">Web Design</li>
                <li className="dropdown_item">Animation</li>
                <li className="dropdown_item">Branding</li>
                <li className="dropdown_item">Illustration</li>
                <li className="dropdown_item">Mobile</li>
                <li className="dropdown_item">Typography</li>
                <li className="dropdown_item">Print</li>
              </ul>
            )}
          </li>

          <li
            className="relative cursor-pointer"
            onMouseEnter={() => setActiveDropdown("hire")}
            onMouseLeave={() => setActiveDropdown(null)}
          >
            Hire a Designer <span className="down-arrow"></span>
            {activeDropdown === "hire" && (
              <ul className="dropdown_menu">
                <li className="dropdown_item">Browse Designers</li>
                <li className="dropdown_item">Submit a Project Brief</li>
                <li className="dropdown_item">Post a Job</li>
                <li className="dropdown_item">Hiring on Whatever</li>
              </ul>
            )}
          </li>

          <li className="cursor-pointer ml-4">Find Jobs</li>
          <li className="cursor-pointer ml-4">Blog</li>

          {/* Search Bar */}
          <li className="ml-4">
            <div className="search-container">
              <input
                type="search"
                className="search-input"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="What are you looking for?"
              />
              <i className="search-icon fas fa-search"></i>
            </div>
          </li>
        </ul>

        {/* Conditional Buttons Section */}
        <div className="navbar_buttons flex space-x-4 items-center">
          {user ? (
            <div className="user-container">
              <span className="user-name">{user.name}</span>
              <button className="logout_button" onClick={handleLogout}>
                Logout
              </button>
            </div>
          ) : (
            <>
              <Link to="/signup" className="signup_button px-4 py-2 rounded-lg">
                Sign Up
              </Link>
              <Link to="/login" className="signin_button px-4 py-2 rounded-lg">
                Sign In
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
