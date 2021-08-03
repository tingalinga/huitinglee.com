import React from "react";

import app from "app.module.css";
import homepage from "./homepage.module.css";

export default class Homepage extends React.Component {
  openLink = (url: string): void => window.open(url, "_blank")?.focus();
  openEmail = (url: string): void => window.open(url, "_self")?.focus();

  renderInfoButtons = () => (
    <div className={homepage.heading_section}>
      <span className={homepage.heading}>huiting lee</span>
      <div className={homepage.info}>
        <img
          alt="github"
          className={homepage.info_button}
          src="https://img.icons8.com/ios-glyphs/30/9d4345/github.png"
          onClick={() => this.openLink("https://github.com/tingalinga")}
        />
        <img
          alt="linkedin"
          className={homepage.info_button}
          src="https://img.icons8.com/ios-glyphs/30/9d4345/linkedin-circled--v1.png"
          onClick={() =>
            this.openLink("https://www.linkedin.com/in/huiting-lee-6a2b061a1/")
          }
        />
        <img
          alt="email"
          className={homepage.info_button}
          src="https://img.icons8.com/ios-glyphs/30/9d4345/email-sign.png"
          onClick={() => this.openEmail("mailto:huiting.lee@u.nus.edu")}
        />
      </div>
    </div>
  );

  render(): JSX.Element {
    console.log("session", localStorage.getItem("session"));
    if (!localStorage.getItem("session")) {
      localStorage.setItem("session", "visited");
      console.log(localStorage.getItem("session"));
    }

    return (
      <div id="homepage" className={app.page}>
        <div className={homepage.page_block}>
          {this.renderInfoButtons()}
          <div className={homepage.introduction}>
            <p>Hey there!</p>
            <p>
              I am an aspiring developer and enjoy designing innovative
              products.
            </p>
            <p>
              I love games, especially pixel RPG games! It is my dream to build
              my own game in the future :)
            </p>
            <img
              className={homepage.chevron_down_bounce}
              src="https://img.icons8.com/ios-glyphs/50/9d4345/double-down--v2.png"
            />
          </div>
        </div>
      </div>
    );
  }
}
