import React from "react";

import Projects from "components/projects";

import app from "app.module.css";

class ProjectsPage extends React.Component {
  render() {
    return (
      <div className={app.page}>
        <Projects />
      </div>
    );
  }
}

export default ProjectsPage;
