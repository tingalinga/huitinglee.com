import React from "react";

import sketch_logo from "assets/logos/sketch_logo.png";
import gamemaker_logo from "assets/logos/gamemaker_logo.png";
import keycloak_logo from "assets/logos/keycloak_logo.png";
import aseprite_logo from "assets/logos/aseprite_logo.png";
import nextjs_logo from "assets/logos/nextjs_logo.png";
import auth0_logo from "assets/logos/auth0_logo.png";
import kong_logo from "assets/logos/kong_logo.png";
import javafx_logo from "assets/logos/javafx_logo.png";

import components from "./components.module.css";

export interface LogoProps {
  image: string;
  name: string;
  size?: number;
}

export class Logo extends React.Component<LogoProps, {}> {
  render() {
    const { image, name, size } = this.props;
    const iconStyle = size
      ? { height: `${size}px`, marginTop: `${(60 - size) * 0.5}px` }
      : {};
    return (
      <div className={components.icon}>
        <img
          alt={`${name} logo`}
          className={components.icon_image}
          style={iconStyle}
          src={image}
        />
        <div className={components.icon_box} />
        <span className={components.icon_name}>{name}</span>
      </div>
    );
  }
}

export const logoPresets: { [name: string]: LogoProps } = {
  javascript: {
    image: "https://img.icons8.com/color/500/000000/javascript--v1.png",
    name: "Javascript",
  },
  typescript: {
    image: "https://img.icons8.com/color/500/000000/typescript.png",
    name: "Typescript",
  },
  java: {
    image:
      "https://img.icons8.com/color/500/000000/java-coffee-cup-logo--v1.png",
    name: "Java",
  },
  react: {
    image: "https://img.icons8.com/color/500/000000/react-native.png",
    name: "ReactJS",
    size: 38,
  },
  css: {
    image: "https://img.icons8.com/color/500/000000/css3.png",
    name: "CSS",
  },
  csharp: {
    image: "https://img.icons8.com/color/500/000000/c-sharp-logo.png",
    name: "C#",
  },
  html: {
    image: "https://img.icons8.com/color/500/000000/html-5--v1.png",
    name: "HTML 5",
    size: 46,
  },
  springboot: {
    image: "https://img.icons8.com/color/500/000000/spring-logo.png",
    name: "SpringBoot",
  },
  keycloak: {
    image: keycloak_logo,
    name: "Keycloak",
  },
  dart: {
    image: "https://img.icons8.com/color/500/000000/dart.png",
    name: "Dart",
  },
  flutter: {
    image: "https://img.icons8.com/color/500/000000/flutter.png",
    name: "Flutter",
  },
  figma: {
    image: "https://img.icons8.com/color/500/000000/figma--v1.png",
    name: "Figma",
    size: 45,
  },
  sketch: {
    image: sketch_logo,
    name: "Sketch",
    size: 38,
  },
  illustrator: {
    image: "https://img.icons8.com/color/500/000000/adobe-illustrator--v1.png",
    name: "Adobe Illustrator",
  },
  xd: {
    image: "https://img.icons8.com/color/500/000000/adobe-xd--v1.png",
    name: "Adobe XD",
  },
  photoshop: {
    image: "https://img.icons8.com/color/500/000000/adobe-photoshop--v1.png",
    name: "Adobe Photoshop",
  },
  premierepro: {
    image: "https://img.icons8.com/color/48/000000/adobe-premiere-pro--v1.png",
    name: "Adobe Premiere Pro",
  },
  procreate: {
    image: "https://img.icons8.com/color/500/000000/procreate.png",
    name: "Procreate",
  },
  aseprite: {
    image: aseprite_logo,
    name: "Aseprite",
    size: 42,
  },
  unity: {
    image: "https://img.icons8.com/ios-filled/500/000000/unity.png",
    name: "Unity",
    size: 45,
  },
  gamemaker: {
    image: gamemaker_logo,
    name: "GameMaker Studio 2",
    size: 42,
  },
  nextjs: {
    image: nextjs_logo,
    name: "NextJS",
    size: 44,
  },
  auth0: {
    image: auth0_logo,
    name: "Auth0",
    size: 44,
  },
  github: {
    image: "https://img.icons8.com/color/500/000000/github--v1.png",
    name: "Github",
  },
  wordpress: {
    image: "https://img.icons8.com/color/48/000000/wordpress.png",
    name: "Wordpress",
  },
  kong: {
    image: kong_logo,
    name: "Kong",
    size: 40,
  },
  javafx: {
    image: javafx_logo,
    name: "JavaFX",
    size: 24,
  },
};
