import React from "react";

import ZoojaIcon from "utils/components/zoojaicon";

import totoro_walk from "assets/totoro_walk.gif";

import app from "app.module.css";
import profile from "./profile.module.css";

export default class Profile extends React.Component {
  render(): JSX.Element {
    return (
      <div id="profile" className={app.page_block}>
        <h2 className={app.heading_box}>
          <ZoojaIcon icon="r" sideIcon /> Profile
        </h2>
        <div className={app.container}>
          <div>
            <p>
              <strong>Name:</strong> Lee Hui Ting
            </p>
            <p>
              Based in: <strong>Singapore</strong>
            </p>
            <img
              className={profile.img}
              alt="walking totoro as my profile"
              src={totoro_walk}
            />
          </div>
          <div className={profile.content}>
            <p>
              <strong>Education:</strong>
              <br />
              <ZoojaIcon icon="Q" /> Final Year in National University of
              Singapore
              <br />
              <ZoojaIcon icon="Q" /> Computer Science Major
              <br />
              <ZoojaIcon icon="Q" /> Specialising in Computer Graphics and Game
              Design
              <br />
              <ZoojaIcon icon="Q" /> Minor in Interactive Media Development
            </p>
            <p>
              <strong>Abilities:</strong>
              <br />
              <ZoojaIcon icon="Q" /> Software Developer
              <br />
              <ZoojaIcon icon="Q" /> UI/UX Design
              <br />
              <ZoojaIcon icon="Q" /> Graphic Illustration
              <br />
            </p>
            <p>
              <strong>Likes:</strong>
              <br />
              <ZoojaIcon icon="Q" /> Totoro (evidently...)
              <br />
              <ZoojaIcon icon="Q" /> Street Jazz Dance
              <br />
              <ZoojaIcon icon="Q" /> Binging Anime
              <br />
            </p>
          </div>
        </div>
      </div>
    );
  }
}
