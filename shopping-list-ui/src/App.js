import "./App.css";
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { MainNav } from "./components/MainNav";
import { AuditPageComponent } from "./components/AuditPageComponent";
import { HomePageComponent } from "./components/HomePageComponent";

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
