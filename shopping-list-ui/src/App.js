import "./App.css";
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { MainNav } from "./main-nav/MainNav";
import { AuditPageComponent } from "./audit-page/AuditPageComponent";
import { HomePageComponent } from "./home-page/HomePageComponent";

export default function App() {
  return (
    <>
      <MainNav></MainNav>
      <Router>
        <div>
          <Switch>
            <Route path="/audit">
              <AuditPageComponent />
            </Route>
            <Route path="/">
              <HomePageComponent />
            </Route>
          </Switch>
        </div>
      </Router>
    </>
  );
}
