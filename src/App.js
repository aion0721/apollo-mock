import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import targetRegistry from "./components/targetRegistry";
import goukakuki from "./components/goukakuki";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Route exact path="/" component={targetRegistry} />
        <Route exact path="/goukakuki" component={goukakuki} />
      </BrowserRouter>
    </div>
  );
}

export default App;
