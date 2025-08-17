// Manpreet Kaur (8983013)
import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-left">
          <h3 className="footer-logo">Wonderlust Guide</h3>
          <p>Explore the world with confidence. Your trusted travel companion since 2025.</p>
        </div>

         {/* Right section: social media links */}
        <div className="footer-right">
          <h4>Follow Us</h4>
          <div className="social-links">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <FaFacebookF />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <FaTwitter />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>

      {/* Footer bottom strip with copyright */}
      <div className="footer-bottom">
        <p>© 2025 Wonderlust Guide. All rights reserved.</p>
      </div>
    </footer>
  );
}
