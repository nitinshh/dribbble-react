import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

import {
  FaTwitter,
  FaPinterest,
  FaFacebook,
  FaInstagram,
} from "react-icons/fa";

function Footer() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <footer className="footer_container">
      <div className="footer_wrapper">
        {/* Logo Section */}
        <div className="footer_logo">
          <img
            src="https://media.istockphoto.com/id/1483051074/vector/whatever-vector-lettering.jpg?s=612x612&w=0&k=20&c=jUsXsXLj-bYMSdPvzCkFKZM1lprQC6PKqjNl_6doV8k="
            alt="Logo"
          />
        </div>

        {/* Navigation Menu */}
        <div className="footer_nav">
          <a href="#">For designers</a>
          <a href="#">Hire talent</a>
          <a href="#">Inspiration</a>
          <a href="#">Advertising</a>
          <a href="#">Blog</a>
          <a href="#">About</a>
          <a href="#">Careers</a>
          <a href="#">Support</a>
        </div>

        {/* Social Media Icons */}
        <div className="footer_socials">
          <a href="#">
            <FaTwitter />
          </a>
          <a href="#">
            <FaPinterest />
          </a>
          <a href="#">
            <FaFacebook />
          </a>
          <a href="#">
            <FaInstagram />
          </a>
        </div>
      </div>

      {/* Second Line */}
      <div className="footer_bottom">
        <div className="footer_left">
          <span>© 2025 Dribbble</span>
          <Link to="/terms">Terms</Link>
          <a href="#">Privacy</a>
          <a href="#">Cookies</a>
        </div>

        <div className="footer_right">
          <a href="#">Jobs</a>
          <a href="#">Designers</a>
          <a href="#">Freelancers</a>
          <a href="#">Tags</a>
          <a href="#">Places</a>
          <a href="#">Resources</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
