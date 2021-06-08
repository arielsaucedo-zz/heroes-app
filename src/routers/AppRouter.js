import React from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";

import { PrivateRoute } from "./PrivateRoute";
import { PublicRoute } from "./PublicRoute";
import { LoginScreen } from "../components/auth/LoginScreen";
import { HeroesScreen } from "../components/heroes/HeroesScreen";

export const AppRouter = () => {
  return (
    <Router>
      <div>
        <Switch>
          <PublicRoute exact path="/login" component={LoginScreen} />
          <PrivateRoute exact path="/" component={HeroesScreen} />
        </Switch>
      </div>
    </Router>
  );
};
