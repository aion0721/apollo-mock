import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import "./App.css";
import profile from "./components/profile"
import mokuhyoukannri from "./components/mokuhyoukannri"
import jissekikannri from "./components/jissekikannri"
import jissekisyousai from "./components/jissekisyousai"

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Route exact path="/" component={profile} />
        <Route exact path="/mokuhyoukannri" component={mokuhyoukannri} />
        <Route exact path="/jissekikannri" component={jissekikannri} />
        <Route exact path="/jissekisyousai" component={jissekisyousai} />
      </BrowserRouter>
    </div>
  );
}

export default App;
