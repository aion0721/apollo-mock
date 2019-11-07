import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import profile from "./components/profile";
import target_registry from "./components/target_registry";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Route exact path="/profile" component={profile} />
        <Route exact path="/" component={Home} />
        <Route exact path="/target_registry" component={target_registry} />
      </BrowserRouter>
    </div>
  );
}

export default App;
