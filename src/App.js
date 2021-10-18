import React from "react";

import "./App.css";

import "./Assets/styles/css/layout.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import { Welcome } from "./App/Pages/Welcome";
import { GeneralAccount } from "./App/Pages/GeneralAccount";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/" exact>
            <Welcome />
          </Route>
          <Route path="/GeneralAccount" exact>
            <GeneralAccount />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}
export default App;
