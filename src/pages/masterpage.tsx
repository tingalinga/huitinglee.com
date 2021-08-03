import React from "react";

import Homepage from "pages/homepage";
import Skills from "pages/skills";

import app from "app.module.css";

export default class MasterPage extends React.Component {
  render(): JSX.Element {
    console.log("session", localStorage.getItem("session"));
    if (!localStorage.getItem("session")) {
      localStorage.setItem("session", "visited");
      console.log(localStorage.getItem("session"));
    }

    return (
      <div className={app.page}>
        <Homepage />
        <Skills />
      </div>
    );
  }
}
