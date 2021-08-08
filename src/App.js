import React from "react";
import { HashRouter, Route, Switch } from "react-router-dom";

import About from "pages/about";
import MasterPage from "pages/masterpage";
import NavBar from "utils/components/navbar";
import UpButton from "utils/components/upbutton";

import { addNavigationHandler } from "utils/isInViewport";

class App extends React.Component {
  render() {
    addNavigationHandler();

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
