import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../styles/Navbar.css";

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

  const handleLogout = () => {
    localStorage.removeItem("user");
    setUser(null);
    navigate("/");
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
        <div className="navbar_buttons flex space-x-4">
          {user ? (
            <div className="user-menu relative">
              <button className="user-button px-4 py-2 rounded-lg">
                {user.name} ▼
              </button>
              <ul className="dropdown_menu absolute mt-2 bg-white shadow-lg">
                <li className="dropdown_item">
                  <Link to="/profile">Profile</Link>
                </li>
                <li className="dropdown_item">
                  <button onClick={handleLogout}>Logout</button>
                </li>
              </ul>
            </div>
          ) : (
            <>
              <button className="signup_button px-4 py-2 rounded-lg">
                <Link to="/signup">Sign Up</Link>
              </button>
              <button className="signin_button px-4 py-2 rounded-lg">
                <Link to="/login">Sign In</Link>
              </button>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
