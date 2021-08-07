import React from "react";

import components from "utils/components.module.css";
import { scroll } from "utils/smoothscroll";
import chevron_up from "assets/chevron_up.png";

export default class UpButton extends React.Component {
  render(): JSX.Element {
    return (
      <img
        className={`${components.chevron_up_button} ${components.bounce}`}
        onClick={() => scroll()}
        alt="scroll to top"
        src={chevron_up}
      />
    );
  }
}
