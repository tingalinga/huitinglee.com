import React from "react";

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
