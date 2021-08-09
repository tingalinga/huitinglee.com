import React from "react";

import Experience from "components/experience";
import NavBar from "utils/components/navbar";
import UpButton from "utils/components/upbutton";
import Footer from "utils/components/footer";

import app from "app.module.css";

class ExperiencePage extends React.Component {
  render() {
    return (
      <>
        <NavBar />
        <UpButton />
        <div className={app.page}>
          <Experience />
          <Footer />
        </div>
      </>
    );
  }
}

export default ExperiencePage;
