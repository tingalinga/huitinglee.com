import "./App.css";
import React from "react";
import { HashRouter, Route, Switch } from "react-router-dom";
import NavBar from "./components/NavBar";
import About from "./pages/About";
import Homepage from "./pages/Homepage";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <HashRouter hashType="noslash">
          <NavBar />

          <Switch>
            <Route path="/about" component={About} />
            <Route component={Homepage} />
          </Switch>
        </HashRouter>
      </div>
    );
  }
}

export default App;
