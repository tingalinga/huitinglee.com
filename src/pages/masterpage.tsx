import React from "react";

import Homepage from "pages/homepage";
import Profile from "pages/profile";
import Skills from "pages/skills";
import Experience from "pages/experience";

import app from "app.module.css";

export default class MasterPage extends React.Component {
  render(): JSX.Element {
    return (
      <div className={app.page}>
        <Homepage />
        <Profile />
        <Skills />
        <Experience />
      </div>
    );
  }
}
