import React from "react";

import "./App.css";

import "./Assets/styles/css/layout.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import { Welcome } from "./App/Pages/Welcome";
import { GeneralAccount } from "./App/Pages/GeneralAccount";
import Signup from "./App/Pages/Signup";
import { VolunteeringStats } from "./App/Pages/VolunteeringStats";
import { PersonalInformation } from "./App/Pages/PersonalInformation";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          {" "}
          <Route path="/" exact>
            <Signup />
          </Route>
          <Route path="/welcome" exact>
            <Welcome />
          </Route>
          <Route path="/GeneralAccount" exact>
            <GeneralAccount />
          </Route>
          <Route path="/VolunteeringStats" exact>
            <VolunteeringStats />
          </Route>
          <Route path="/PersonalInformation" exact>
            <PersonalInformation />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}
export default App;
