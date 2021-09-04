import React from "react";

import "./App.css";
import Home from "./App/Pages/Home";
import './Assets/styles/css/layout.css'
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Index from "./App/Pages/Index";
import SignIn from "./App/Pages/SignIn";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/" exact>
            <SignIn />
          </Route>

          
        </Switch>
      </BrowserRouter>
    </div>
  );
}
export default App;
