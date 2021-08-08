import React from "react";
import { Link } from "react-router-dom";

import totoro from "assets/totoro.png";

import app from "app.module.css";
import components from "./components.module.css";

class NavBar extends React.Component {
  render() {
    return (
      <div id="navbar" className={components.navbar}>
        <div id="first_page_block" className={app.first_page_block} />
        <Link to="/">
          <img src={totoro} alt="totoro" />
        </Link>
        <div className={components.links}>
          <Link className={components.link} to="/about">
            About
          </Link>
          <Link className={components.link} to="/experience">
            Experience
          </Link>
          <Link className={components.link} to="/projects">
            Projects
          </Link>
          <Link className={components.link} to="/contact">
            Contact
          </Link>
        </div>
      </div>
    );
  }
}

export default NavBar;
