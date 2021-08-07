import React from "react";

import Homepage from "components/homepage";
import Profile from "components/profile";
import Skills from "components/skills";
import Experience from "components/experience";

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
