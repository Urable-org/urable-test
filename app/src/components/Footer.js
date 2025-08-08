import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-links">
        <div className="footer-section">
          <h3>Company</h3>
          <ul>
            <li><a href="/about">About</a></li>
            <li><a href="/blog">Blog</a></li>
            <li><a href="/api-docs">API Docs</a></li>
            <li><a href="/status">Status</a></li>
            <li><a href="/careers">Careers</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>Social</h3>
          <ul>
            <li><a href="#">Twitter</a></li>
            <li><a href="#">LinkedIn</a></li>
            <li><a href="#">GitHub</a></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2023 Urable. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;