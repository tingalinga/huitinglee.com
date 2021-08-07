import React from "react";
import { HashRouter, Route, Switch } from "react-router-dom";

import About from "pages/about";
import MasterPage from "pages/masterpage";
import NavBar from "utils/navbar";
import UpButton from "utils/upbutton";

class App extends React.Component {
  render() {
    return (
      <div>
        <HashRouter hashType="noslash">
          <NavBar />
          <UpButton />

          <Switch>
            <Route path="/about" component={About} />
            <Route component={MasterPage} />
          </Switch>
        </HashRouter>
      </div>
    );
  }
}

export default App;
