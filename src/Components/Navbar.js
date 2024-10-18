// Navbar.js
import React from "react";
import { Link } from "react-router-dom";
import logo from "../Imgs/logo_sam.jpeg";

const Navbar = () => {
  return (
    <nav>
      <img src={logo} />
      <div className="nav-links">
        <div className="link">
          <Link to="/">Home</Link>
        </div>
        <div className="link">
          <Link to="/about">About</Link>
        </div>
        <div className="link">
          <Link to="/students">My prorects</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
