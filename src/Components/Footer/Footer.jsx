import React from "react";
import "./Footer.css";
import { Link } from 'react-router-dom'


const Footer = () => {
  return (
    <section className="footer">
      <div className="footer_info">
      <ul className="links">
          <li><Link to="/about">About Us</Link></li>
          <li><Link to="/contact">Contact Us</Link></li>
      </ul>
    <div className="more_info">
    <li><Link to="/privacy">Privacy Policy</Link></li>
    </div> 
      </div>     
      <div className="copyright">
        <p> Made By RahulDarji :All rights reserved</p>
      </div>
    </section>
  );
};

export default Footer;
