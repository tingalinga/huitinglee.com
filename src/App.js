import React from "react";
import { HashRouter, Route, Switch } from "react-router-dom";

import NavBar from "components/navbar";
import UpButton from "components/upbutton";
import About from "pages/about";
import MasterPage from "pages/masterpage";

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
