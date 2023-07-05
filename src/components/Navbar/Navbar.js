import React from "react";
import "./Navbar.css";

import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="container">
      <nav className="navbar">
        {/* <!-- LOGO --> */}
        <div className="logo">
          <img
            className="image-fluid"
            src={"images/logo1.png"}
            alt=""
            height="80px"
            width="150px"
          />
        </div>

        {/* <!-- NAVIGATION MENU --> */}
        <ul className="nav-links">
          <div className="menu">
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <Link to="/about">About Us</Link>
            </li>

            <li>
              <Link to="/Services">Services</Link>
            </li>
            <li>
              <Link to="/Blog">Blog</Link>
            </li>
            <li>
              <Link to="/Contact">Contact</Link>
            </li>
            <li>
              <a href>
                <button className="get-started-button ">Get Started</button>
              </a>
            </li>
          </div>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
