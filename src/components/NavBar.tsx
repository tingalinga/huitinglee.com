import React from "react";
import { Link } from "react-router-dom";

class NavBar extends React.Component {
  render() {
    return (
      <div className="navbar">
        <Link className="nav-link" to="/">
          Homepage
        </Link>
        <Link className="nav-link" to="/about">
          About
        </Link>
        <Link className="nav-link" to="/contact">
          Contact
        </Link>
      </div>
    );
  }
}

export default NavBar;
