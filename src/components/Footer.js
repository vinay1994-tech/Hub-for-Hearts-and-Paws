import React from "react";
import "./Footer.css"; // Import the CSS file

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h3 className="footer-title">About Hearts and Paws</h3>
          <ul className="footer-links">
            <li>
              Efforts are about having a shelter for them. We can even
              provide an option to adopt the pets which can be good companions
              to the humans. 
            </li>
            <li>
            This initiative of being a platform between the
              NGO's that provides the shelters for street animals creates a
              culture of sympathy.
            </li>
            <li>
            Medical Treatment and rehabilitation is most
              important aspect where it can help to reduce the suffering of the
              animals as far as possible.
            </li>
          </ul>
        </div>
        <div className="footer-section">
          <h3 className="footer-title">Quick Links</h3>
          <ul className="footer-links">
            <li>
              <a href="/about-us">Find a pet</a>
            </li>
            <li>
              <a href="/contact-us">List a pet</a>
            </li>
            <li>
              <a href="/terms">Medical Care</a>
            </li>
            <li>
              <a href="/privacy-policy">FAQs</a>
            </li>
          </ul>
        </div>
        <div className="footer-section">
          <h3 className="footer-title">Quick Links</h3>
          <ul className="footer-links">
            <li>
              <a href="/about-us">About Us</a>
            </li>
            <li>
              <a href="/contact-us">Contact Us</a>
            </li>
            <li>
              <a href="/terms">Terms & Conditions</a>
            </li>
            <li>
              <a href="/privacy-policy">Privacy Policy</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© 2024 YourCompany. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
