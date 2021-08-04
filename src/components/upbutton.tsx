import React from "react";

import app from "app.module.css";
import { scroll } from "utils/smoothscroll";
import chevron_up from "assets/chevron_up.png";

export default class UpButton extends React.Component {
  render(): JSX.Element {
    return (
      <img
        className={`${app.chevron_up_button} ${app.bounce}`}
        onClick={() => scroll()}
        alt="scroll to top"
        src={chevron_up}
      />
    );
  }
}
