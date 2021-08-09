import React from "react";
import { HashRouter, Route, Switch } from "react-router-dom";

import MasterPage from "pages/masterpage";
import About from "pages/about";
import Experience from "pages/experience";
import Projects from "pages/projects";
import Contact from "pages/contact";

import { addNavigationHandler } from "utils/isInViewport";

class App extends React.Component {
  render() {
    addNavigationHandler();

    return (
      <div>
        <HashRouter hashType="noslash">
          <Switch>
            <Route path="/about" component={About} />
            <Route path="/experience" component={Experience} />
            <Route path="/projects" component={Projects} />
            <Route path="/contact" component={Contact} />
            <Route component={MasterPage} />
          </Switch>
        </HashRouter>
      </div>
    );
  }
}

export default App;
