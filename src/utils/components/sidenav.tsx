import React from "react";

import components from "./components.module.css";

class SideNav extends React.Component {
  // TODO good to have side navigation
  render() {
    return (
      <div id="sidenav" className={components.sidenav}>
        <div>
          profile
          <img src="https://img.icons8.com/ios-glyphs/30/000000/circled.png" />
        </div>
      </div>
    );
  }
}

export default SideNav;
