import React from "react";

import chevron_up from "assets/chevron_up.png";
import { scroll } from "utils/smoothscroll";

import components from "./components.module.css";

export default class UpButton extends React.Component {
  render(): JSX.Element {
    return (
      <img
        id="up_button"
        className={`${components.chevron_up_button} ${components.bounce}`}
        onClick={() => scroll()}
        alt="scroll to top"
        src={chevron_up}
      />
    );
  }
}
