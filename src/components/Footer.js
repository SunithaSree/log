import React from 'react';
import './Footer.css'
const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <p className="copyright">Copyright &copy; {new Date().getFullYear()} Webees Private Limited,All rights reserved</p>
        <ul className="footer-links">
          <li><a href="#">About Us |</a></li>
          <li><a href="#">Contact |</a></li>
          <li><a href="#">Privacy Policy |</a></li>
          <li><a href="#">Terms of Use</a></li>
        </ul>
        <div className="social-links">
          <a href="#"><i className="fab fa-facebook-f"></i></a>
          <a href="#"><i className="fab fa-twitter"></i></a>
          <a href="#"><i className="fab fa-instagram"></i></a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
