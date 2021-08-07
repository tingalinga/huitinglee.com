import React from "react";

import Homepage from "pages/homepage";
import Skills from "pages/skills";
import Profile from "pages/profile";

import app from "app.module.css";

export default class MasterPage extends React.Component {
  render(): JSX.Element {
    return (
      <div className={app.page}>
        <Homepage />
        <Profile />
        <Skills />
      </div>
    );
  }
}
