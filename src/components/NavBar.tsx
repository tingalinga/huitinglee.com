import React from "react";
import { Link } from "react-router-dom";

import totoro from "assets/totoro.png";

import navbar from "./navbar.module.css";

class NavBar extends React.Component {
  render() {
    return (
      <div className={navbar.navbar}>
        <img src={totoro} alt="totoro" />
        <div className={navbar.links}>
          <Link className={navbar.link} to="/">
            Homepage
          </Link>
          <Link className={navbar.link} to="/about">
            About
          </Link>
          <Link className={navbar.link} to="/contact">
            Contact
          </Link>
        </div>
      </div>
    );
  }
}

export default NavBar;
