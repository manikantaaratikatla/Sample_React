import React from "react";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-section">
        <h4>About Us</h4>
        <p>Food Delivery App is your go-to platform for delicious meals delivered fast.</p>
      </div>
      <div className="footer-section">
        <h4>Quick Links</h4>
        <ul>
          <li>Privacy Policy</li>
          <li>Terms of Service</li>
          <li>Support</li>
        </ul>
      </div>
      <div className="footer-section">
        <h4>Contact</h4>
        <p>Email: support@fooddeliveryapp.com</p>
        <p>Phone: +123-456-7890</p>
      </div>
    </footer>
  );
};

export default Footer;