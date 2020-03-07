import React from "react";
import "./Header.css";

function Header() {
  return (
    <div>
      <header className="header">
        <a href="" className="logo">
          <span className="grey-color"> &lt;</span>
          <span className="logo-name">Alex Boicu</span>
          <span className="grey-color">/&gt;</span>
        </a>
        <input className="menu-btn" type="checkbox" id="menu-btn" />
        <label className="menu-icon" htmlFor="menu-btn">
          <span className="navicon"></span>
        </label>
        <nav className="menu">
          <ul>
            <li>
              <a href="#skills">Skills</a>
            </li>
            <li>
              <a href="#portofolio">Portofolio</a>
            </li>
            <li>
              <a href="#opensource">Open Source</a>
            </li>
            <li>
              <a href="#contact">Contact Me</a>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
}
export default Header;
