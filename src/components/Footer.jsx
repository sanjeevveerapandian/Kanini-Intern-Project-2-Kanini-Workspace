import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer-custom">
      <div className="container">
        <div className="footer-left">
          &copy; 2022 Kanini Software Solutions Ltd.
        </div>
        <div className="footer-right">
          <a href="/terms" className="footer-link">Terms of Use</a> | 
          <a href="/privacy" className="footer-link"> Privacy Policy</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
