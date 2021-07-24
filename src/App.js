import "./App.css";
import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import NavBar from "./components/NavBar";
import About from "./pages/About";
import Homepage from "./pages/Homepage";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <NavBar />

          <Switch>
            <Route exact path="/" component={Homepage} />
            <Route path="/about" component={About} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
