import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <div className="header-menu">
    <nav>
      <ul>
        <li>
          <Link to="/">Intro</Link>
        </li>
        <li>
          <Link to="/skills">Skills</Link>
        </li>
        <li>
          <Link to="/projects">Projects</Link>
        </li>
        <li>
          <Link to="/blog">Blog</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  </div>
  );
}

export default Header;
