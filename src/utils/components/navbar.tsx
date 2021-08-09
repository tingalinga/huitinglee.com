import { Link } from "react-router-dom";

import useWindowDimensions from "utils/windowdimensions";
import totoro from "assets/totoro.png";

import app from "app.module.css";
import components from "./components.module.css";

const NavBar = () => {
  const { width } = useWindowDimensions();
  return (
    <div id="navbar" className={components.navbar}>
      <div id="first_page_block" className={app.first_page_block} />
      <Link to="/" replace>
        <img src={totoro} alt="homepage button" />
        {window.location.hash && width > 992 && (
          <span className={components.homelink}>huiting lee</span>
        )}
      </Link>
      <div className={components.links}>
        <Link className={components.link} to="/about" replace>
          About
        </Link>
        <Link className={components.link} to="/experience" replace>
          Experience
        </Link>
        <Link className={components.link} to="/projects" replace>
          Projects
        </Link>
        <Link className={components.link} to="/contact" replace>
          Contact
        </Link>
      </div>
    </div>
  );
};

export default NavBar;
