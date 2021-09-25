import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./Components/Home";
import About from "./Components/About";
import Nav from "./Components/Nav";

function App() {
  return (
    <div className="App">
      <Nav />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/About">
          <About />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
