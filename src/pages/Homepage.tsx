import React from "react";

import "../App.css";

export default class Homepage extends React.Component {
  render(): JSX.Element {
    return (
      <div className="page">
        <h1>homepage</h1>
        <p>Changed page :)</p>
        <p>Changed second time!</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </div>
    );
  }
}
