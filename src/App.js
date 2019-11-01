import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
<<<<<<< HEAD
import targetRegistry from "./components/targetRegistry";
import goukakuki from "./components/goukakuki";
=======
import "./App.css";
import profile from "./components/profile"
import mokuhyoukannri from "./components/mokuhyoukannri"
import jissekikannri from "./components/jissekikannri"
import jissekisyousai from "./components/jissekisyousai"
>>>>>>> 46b585a7979d56e7082493676510cd689f8f4288

function App() {
  return (
    <div className="App">
      <BrowserRouter>
<<<<<<< HEAD
        <Route exact path="/" component={targetRegistry} />
        <Route exact path="/goukakuki" component={goukakuki} />
=======
        <Route exact path="/" component={profile} />
        <Route exact path="/mokuhyoukannri" component={mokuhyoukannri} />
        <Route exact path="/jissekikannri" component={jissekikannri} />
        <Route exact path="/jissekisyousai" component={jissekisyousai} />
>>>>>>> 46b585a7979d56e7082493676510cd689f8f4288
      </BrowserRouter>
    </div>
  );
}

export default App;
