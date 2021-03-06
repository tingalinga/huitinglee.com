import React from "react";

import Projects from "components/projects";
import NavBar from "utils/components/navbar";
import UpButton from "utils/components/upbutton";
import Footer from "utils/components/footer";

import app from "app.module.css";

class ProjectsPage extends React.Component {
  render() {
    return (
      <>
        <NavBar />
        <UpButton />
        <div className={app.page}>
          <Projects />
          <Footer />
        </div>
      </>
    );
  }
}

export default ProjectsPage;
