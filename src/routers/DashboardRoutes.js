import React from "react";
import { Switch, Route, Redirect } from "react-router";
import { HeroesDetails } from "../components/heroes/HeroesDetails";

import { HeroesScreen } from "../components/heroes/HeroesScreen";
import { SearchScreen } from "../components/search/SearchScreen";
import { Navbar } from "../components/ui/Navbar";

/* Dashboard de las distintas rutas privadas */

export const DashboardRoutes = () => {
  return (
    <>
      <Navbar />
      <div className="container mt-2">
        <Switch>
          <Route exact path="/heroes" component={HeroesScreen} />
          <Route exact path="/heroes/:id" component={HeroesDetails} />
          <Route exact path="/search" component={SearchScreen} />

          <Redirect to="/heroes" />
        </Switch>
      </div>
    </>
  );
};
