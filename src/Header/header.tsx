// Header.jsx

import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./header.css";

function Header() {
  const location = useLocation();

  return (
    <div className="header-menu">
      <nav>
        <ul>
          <li>
            <Link to="/" className={location.pathname === "/" ? "active" : ""}>
              Intro
            </Link>
          </li>
          <li>
            <Link
              to="/skills"
              className={location.pathname === "/skills" ? "active" : ""}
            >
              Skills
            </Link>
          </li>
          <li>
            <Link
              to="/projects"
              className={location.pathname === "/projects" ? "active" : ""}
            >
              Projects
            </Link>
          </li>
          <li>
            <Link
              to="/resume"
              className={location.pathname === "/resume" ? "active" : ""}
            >
              Resume
            </Link>
          </li>
          {/* <li>
            <Link
              to="/blog"
              className={location.pathname === "/blog" ? "active" : ""}
            >
              Blog
            </Link>
          </li> */}
          <li>
            <Link
              to="/contact"
              className={location.pathname === "/contact" ? "active" : ""}
            >
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Header;
