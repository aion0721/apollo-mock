import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import targetRegistry from "./components/targetRegistry";
import goukakuki from "./components/goukakuki";
import "./App.css";
import profile from "./components/profile";
import mokuhyoukannri from "./components/mokuhyoukannri";
import jissekikannri from "./components/jissekikannri";
import jissekisyousai from "./components/jissekisyousai";
import Top from "./components/Top";
import sns_overview from "./components/sns_overview";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Route exact path="/targetregistry" component={targetRegistry} />
        <Route exact path="/goukakuki" component={goukakuki} />
        <Route exact path="/profile" component={profile} />
        <Route exact path="/" component={Top} />
        <Route exact path="/mokuhyoukannri" component={mokuhyoukannri} />
        <Route exact path="/jissekikannri" component={jissekikannri} />
        <Route exact path="/jissekisyousai" component={jissekisyousai} />
        <Route exact path="/sns_overview" component={sns_overview} />
        </BrowserRouter>
    </div>
  );
}

export default App;
