import React from "react";

import Experience from "components/experience";

import app from "app.module.css";

class ExperiencePage extends React.Component {
  render() {
    return (
      <div className={app.page}>
        <Experience />
      </div>
    );
  }
}

export default ExperiencePage;
