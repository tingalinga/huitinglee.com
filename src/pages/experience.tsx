import React from "react";

import Experience from "components/experience";
import NavBar from "utils/components/navbar";
import UpButton from "utils/components/upbutton";

import app from "app.module.css";

class ExperiencePage extends React.Component {
  render() {
    return (
      <>
        <NavBar />
        <UpButton />
        <div className={app.page}>
          <Experience />
        </div>
      </>
    );
  }
}

export default ExperiencePage;
