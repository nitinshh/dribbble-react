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
          <Link to="/">
            <img
              src="https://media.istockphoto.com/id/1483051074/vector/whatever-vector-lettering.jpg?s=612x612&w=0&k=20&c=jUsXsXLj-bYMSdPvzCkFKZM1lprQC6PKqjNl_6doV8k="
              alt="Logo"
              className="w-16 h-16"
            />
          </Link>
        </div>

        {/* Navigation Menu */}
        <div className="footer_nav">
          <a href="#">For designers</a>
          <a href="#">Hire talent</a>
          <a href="#">Inspiration</a>
          <a href="#">Advertising</a>
          <a href="#">Blog</a>
          <Link to="/about">About</Link>
          <Link to="/careers">Careers</Link>
          <a href="#">Support</a>
        </div>

        {/* Social Media Icons */}
        <div className="footer_socials">
          <a href="https://x.com" target="_blank" rel="noopener noreferrer">
            <FaTwitter />{" "}
          </a>
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebook />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram />
          </a>
          <a
            href="https://pinterest.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaPinterest />
          </a>
        </div>
      </div>

      {/* Second Line */}
      <div className="footer_bottom">
        <div className="footer_left">
          <span>© 2025 Whatever</span>
          <Link to="/terms">Terms</Link>
          <Link to="/privacypolicy">Privacy</Link>
          <Link to="/cookiespolicy">Cookies</Link>
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
