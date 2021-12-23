import React from "react";

import "./App.css";

import "./Assets/styles/css/layout.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import { Welcome } from "./App/Pages/Welcome";
import { GeneralAccount } from "./App/Pages/GeneralAccount";
import Signup from "./App/Pages/Signup";
import { VolunteeringStats } from "./App/Pages/VolunteeringStats";
import { PersonalInformation } from "./App/Pages/PersonalInformation";
import { ForgetPassword } from "./App/Pages/ForgetPassword";
import AdminAccount from "./App/Pages/AdminAccount";
import OrganizationInfomation from "./App/Pages/OrganizationInfomation";
import OrganizationAccount from "./App/Pages/OrganizationAccount";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          {" "}
          <Route path="/PersonalInformation" exact>
            <ForgetPassword />
          </Route>
          <Route path="/Signup" exact>
            <Signup />
          </Route>
          <Route path="/AdminAccount" exact>
            <AdminAccount />
          </Route>
          <Route path="/OrganizationInfomation" exact>
            <OrganizationInfomation />
          </Route>
          <Route path="/OrganizationAccount" exact>
            <OrganizationAccount />
          </Route>
          <Route path="/welcome" exact>
            <Welcome
              headtext="Welcome to Cyber Volunteer"
              simpletext="  You have created a Cyber Volunteers account. A verification email has
          been sent to mytechlife86@gmail.com. Please verify your email to be
          able to sign up for volunteering opportunities."
              buttonText="GO TO MY ACCOUNT"
              linkButton="/GeneralAccount"
            />
          </Route>
          <Route path="/thankyou" exact>
            <Welcome
              headtext="Thank you for sign your Organisation Up to Cyber Volunteers"
              simpletext="We aim to review all organisation submissions within 72 hours. 
Once we have made a decision you will either receive an email 
confirming your organisation has been granted an account or 
inquiring about further information"
              buttonText="CONTINUE"
              linkButton="/GeneralAccount"
            />
          </Route>{" "}
          <Route path="/verify" exact>
            <Welcome
              headtext="Please Verify Your Email"
              simpletext="A verification email has been sent to mytechlife96@gmail.com . Please 
verify your email to continue creating your Organisation’s 
Cyber Volunteers profile."
              buttonText="RESEND EMAIL"
              linkButton="/GeneralAccount"
            />
          </Route>
          <Route path="/GeneralAccount" exact>
            <GeneralAccount />
          </Route>
          <Route path="/VolunteeringStats" exact>
            <VolunteeringStats />
          </Route>
          <Route path="/" exact>
            <PersonalInformation />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}
export default App;
