import React from "react";
import { Link } from "react-router-dom";

import totoro from "assets/totoro.png";

import components from "./components.module.css";

class NavBar extends React.Component {
  render() {
    return (
      <div id="navbar" className={components.navbar}>
        <Link to="/">
          <img src={totoro} alt="totoro" />
        </Link>
        <div className={components.links}>
          <Link className={components.link} to="/about">
            About
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
