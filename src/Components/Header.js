import React from 'react';

const Header = () => (
  <header className="bg-white">
    <div className="container d-flex justify-content-between align-items-center">
      <a href="/" className="navbar-brand">
        <img src="/habot-logo.jpg" alt="HABOT Logo" height="120px" width="110px" />
      </a>
      <nav className="d-flex">
        <a href="#suppliers" className="nav-link text-dark">Find Suppliers</a>
        <a href="#tags" className="nav-link mx-4 text-dark">Find Service Tags</a>
        <button className="btn btn-outline-dark">Login / Sign Up</button>
      </nav>
    </div>
  </header>
);

export default Header;
