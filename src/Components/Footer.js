
import React from "react";

const Footer = () => (
  <footer className="text-white py-4">
    <div className="container footer d-flex justify-content-between mt-5">
      <div className="mt-4">
        <img src="logo2.jpg" alt="Company Logo" />
      </div>
      <div className="quicklinks">
        <div>
          {['Company', 'About', 'FAQ'].map((link, index) => (
            <a href="javascript:void(0)" className="text-white me-3" key={index}>{link}</a>
          ))}
        </div>
        <div className='mx-5 px-5'>
          {['Terms', 'Data Privacy', 'Terms', 'Accessibility'].map((link, index) => (
            <a href="javascript:void(0)" className="text-white me-3" key={index}>{link}</a>
          ))}
        </div>
        <div>
          {['Related', 'Find Buyer', 'Feedback'].map((link, index) => (
            <a href="javascript:void(0)" className="text-white me-3" key={index}>{link}</a>
          ))}
        </div>
      </div>
      <div className='mt-4 fs-4'>
        <a href="javascript:void(0)" className="bi bi-linkedin me-4 text-white"></a>
        <a href="javascript:void(0)" className="bi bi-twitter me-4 text-white"></a>
        <a href="javascript:void(0)" className="bi bi-facebook me-4 text-white"></a>
        <a href="javascript:void(0)" className="bi bi-instagram text-white"></a>
      </div>
    </div>
  </footer>
);

export default Footer;