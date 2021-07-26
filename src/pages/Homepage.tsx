import React from "react";

import app from "app.module.css";

export default class Homepage extends React.Component {
  render(): JSX.Element {
    return (
      <div className={app.page}>
        <h1>homepage</h1>
        <p>Changed page :)</p>
        <a href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
          Learn React
        </a>
      </div>
    );
  }
}
