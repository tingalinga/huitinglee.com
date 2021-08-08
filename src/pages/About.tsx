import React from "react";

import Profile from "components/profile";
import Skills from "components/skills";

import app from "app.module.css";

class About extends React.Component {
  render() {
    return (
      <div className={app.page}>
        <Profile />
        <Skills />
      </div>
    );
  }
}

export default About;
