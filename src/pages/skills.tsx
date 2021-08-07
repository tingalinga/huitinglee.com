import React from "react";

import sketch_logo from "assets/logos/sketch_logo.png";
import gamemaker_logo from "assets/logos/gamemaker_logo.png";
import keycloak_logo from "assets/logos/keycloak_logo.png";
import aseprite_logo from "assets/logos/aseprite_logo.png";

import ZoojaIcon from "utils/zoojaicon";
import { Logo, LogoProps } from "utils/logo";

import app from "app.module.css";
import skills from "./skills.module.css";

interface SkillList {
  [skill: string]: {
    confident: LogoProps[];
    tried: LogoProps[];
  };
}

const skillList: SkillList = {
  technical: {
    confident: [
      {
        image: "https://img.icons8.com/color/500/000000/javascript--v1.png",
        name: "Javascript",
      },
      {
        image: "https://img.icons8.com/color/500/000000/typescript.png",
        name: "Typescript",
      },
      {
        image:
          "https://img.icons8.com/color/500/000000/java-coffee-cup-logo--v1.png",
        name: "Java",
      },
      {
        image: "https://img.icons8.com/color/500/000000/react-native.png",
        name: "ReactJS",
        size: 38,
      },
      {
        image: "https://img.icons8.com/color/500/000000/css3.png",
        name: "CSS",
      },
    ],
    tried: [
      {
        image: "https://img.icons8.com/color/500/000000/c-sharp-logo.png",
        name: "C#",
      },
      {
        image: "https://img.icons8.com/color/500/000000/html-5--v1.png",
        name: "HTML 5",
        size: 46,
      },
      {
        image: "https://img.icons8.com/color/500/000000/spring-logo.png",
        name: "SpringBoot",
      },
      {
        image: keycloak_logo,
        name: "Keycloak",
      },
      {
        image: "https://img.icons8.com/color/500/000000/dart.png",
        name: "Dart",
      },
      {
        image: "https://img.icons8.com/color/500/000000/flutter.png",
        name: "Flutter",
      },
    ],
  },
  design: {
    confident: [
      {
        image: "https://img.icons8.com/color/500/000000/figma--v1.png",
        name: "Figma",
        size: 45,
      },
      {
        image: sketch_logo,
        name: "Sketch",
        size: 38,
      },
      {
        image:
          "https://img.icons8.com/color/500/000000/adobe-illustrator--v1.png",
        name: "Adobe Illustrator",
      },
      {
        image: "https://img.icons8.com/color/500/000000/adobe-xd--v1.png",
        name: "Adobe XD",
      },
    ],
    tried: [
      {
        image:
          "https://img.icons8.com/color/500/000000/adobe-photoshop--v1.png",
        name: "Adobe Photoshop",
      },
      {
        image: "https://img.icons8.com/color/500/000000/procreate.png",
        name: "Procreate",
      },
      {
        image: aseprite_logo,
        name: "Aseprite",
        size: 42,
      },
    ],
  },
  "game development": {
    confident: [
      {
        image: "https://img.icons8.com/ios-filled/500/000000/unity.png",
        name: "Unity",
        size: 45,
      },
      {
        image: gamemaker_logo,
        name: "GameMaker Studio 2",
        size: 42,
      },
    ],
    tried: [],
  },
};

export default class Skills extends React.Component {
  renderSkillDisplay = (skill: string) => {
    return (
      <>
        <p>
          <strong>{skill}</strong>
        </p>
        <div className={app.container}>
          <div className={skills.skills_display}>
            <p className={skills.subheader}>I am confident in</p>
            {skillList[skill].confident.map((logoProp) => (
              <Logo key={logoProp.name} {...logoProp} />
            ))}
          </div>
          {skillList[skill].tried.length > 0 && (
            <div className={skills.skills_display}>
              <p className={skills.subheader}>I have dabbled in</p>
              {skillList[skill].tried.map((logoProp) => (
                <Logo key={logoProp.name} {...logoProp} />
              ))}
            </div>
          )}
        </div>
      </>
    );
  };

  render(): JSX.Element {
    return (
      <div id="skills" className={app.page_block}>
        <h2 className={app.heading}>
          <ZoojaIcon icon="U" sideIcon /> Skills
        </h2>
        <div>
          {this.renderSkillDisplay("technical")}
          {this.renderSkillDisplay("design")}
          {this.renderSkillDisplay("game development")}
        </div>
      </div>
    );
  }
}
