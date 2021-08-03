import React from "react";
import { Link } from "react-router-dom";

import app from "app.module.css";
import homepage from "./homepage.module.css";
import skills from "./skills.module.css";

export default class Homepage extends React.Component {
  render(): JSX.Element {
    return (
      <div className={app.page_block}>
        <h1>Skills</h1>
        <div className={homepage.introduction}>
          <p>
            <span>I am a </span>
            <Link className={homepage.link} to="/programmer">
              programmer
            </Link>
            <span> , </span>
            <Link className={homepage.link} to="/designer">
              designer
            </Link>
            <span> , and </span>
            <Link className={homepage.link} to="/game">
              game developer.
            </Link>
          </p>
        </div>
      </div>
    );
  }
}
