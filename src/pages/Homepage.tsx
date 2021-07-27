import React from "react";
import { Link } from "react-router-dom";

import app from "app.module.css";
import homepage from "./homepage.module.css";
import skills from "./skills.module.css";

export default class Homepage extends React.Component {
  renderHomepageBlock = (): JSX.Element => (
    <div className={`${app.page_block} ${app.center}`}>
      <h1 className={homepage.plarfair_title}>Huiting Lee</h1>
      <div className={homepage.introduction}>
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
      </div>
    </div>
  );

  renderSkillsBlock = (): JSX.Element => (
    <div className={app.page_block}>
      <h1 className={skills.title}>Skills</h1>
      <div className={homepage.introduction}>
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
      </div>
    </div>
  );

  render(): JSX.Element {
    return (
      <div className={app.page}>
        {this.renderHomepageBlock()} {this.renderSkillsBlock()}
      </div>
    );
  }
}
