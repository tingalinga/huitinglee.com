import React from "react";

import Profile from "components/profile";
import Skills from "components/skills";
import NavBar from "utils/components/navbar";
import UpButton from "utils/components/upbutton";
import Footer from "utils/components/footer";

import app from "app.module.css";

class About extends React.Component {
  render() {
    return (
      <>
        <NavBar />
        <UpButton />
        <div className={app.page}>
          <Profile />
          <Skills />
          <Footer />
        </div>
      </>
    );
  }
}

export default About;
