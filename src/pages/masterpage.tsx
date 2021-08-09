import React from "react";

import Homepage from "components/homepage";
import Profile from "components/profile";
import Skills from "components/skills";
import Experience from "components/experience";
import Projects from "components/projects";
import Contact from "components/contact";

import NavBar from "utils/components/navbar";
import UpButton from "utils/components/upbutton";
import Footer from "utils/components/footer";

import app from "app.module.css";

export default class MasterPage extends React.Component {
  openLink = (url: string): void => window.open(url, "_blank")?.focus();
  openEmail = (url: string): void => window.open(url, "_self")?.focus();

  render(): JSX.Element {
    return (
      <>
        <NavBar />
        <UpButton />
        <div className={app.page}>
          <Homepage />
          <Profile />
          <Skills />
          <Experience />
          <Projects />
          <Contact />
          <Footer />
        </div>
      </>
    );
  }
}
