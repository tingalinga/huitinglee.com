import React from "react";

import Profile from "components/profile";
import Skills from "components/skills";

import app from "app.module.css";

class About extends React.Component {
  render() {
    return (
      <div className={app.page}>
        <Profile />
        <Skills />
        <div className={app.top_page_block}>
          <h1>about</h1>
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </div>
      </div>
    );
  }
}

export default About;
