import React from "react";

import app from "app.module.css";

interface ZoojaIconProps {
  icon: string;
  sideIcon?: boolean;
}

export default class ZoojaIcon extends React.Component<ZoojaIconProps, {}> {
  render(): JSX.Element {
    if (this.props.sideIcon)
      return (
        <div className={app.side_icon}>
          <span className={app.zooja_elements}>{this.props.icon}</span>
        </div>
      );
    return <span className={app.zooja_elements}>{this.props.icon}</span>;
  }
}
