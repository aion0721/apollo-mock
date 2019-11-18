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
import mokuhyouichirann from "./components/mokuhyouichirann";
import jissekitouroku from "./components/jissekitouroku";
import confirmprofile from "./components/confirmprofile";
import confirmprofileother from "./components/confirmprofileother";
import sinncyokukannri from "./components/sinncyokukannri";
import resistersns from "./components/resistersns";
import notification from "./components/notification";
import confirmgoukakuki from "./components/confirmgoukakuki";
import goukakukiichirann from "./components/goukakukiichirann";
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
        <Route exact path="/mokuhyouichirann" component={mokuhyouichirann} />
        <Route exact path="/jissekitouroku" component={jissekitouroku} />
        <Route exact path="/confirmprofile" component={confirmprofile} />
        <Route exact path="/confirmprofileother" component={confirmprofileother} />
        <Route exact path="/sinncyokukannri" component={sinncyokukannri} />
        <Route exact path="/resistersns" component={resistersns} />
        <Route exact path="/notification" component={notification} />
        <Route exact path="/confirmgoukakuki" component={confirmgoukakuki} />
        <Route exact path="/goukakukiichirann" component={goukakukiichirann} />
        <Route exact path="/sns_overview" component={sns_overview} />
        </BrowserRouter>
    </div>
  );
}

export default App;
