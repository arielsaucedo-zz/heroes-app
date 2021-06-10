import React from "react";
import { HeroCard } from "./HeroCard";

export const HeroesScreen = () => {
  return (
    <div className="d-flex row justify-content-center">
      <h1 className="text-center">Este es tu equipo</h1>
      <div className="container mt-4">
        <div className="row text-center">
          <div className="col">
            <HeroCard />
          </div>
          <div className="col">Column</div>
          <div className="col">Column</div>
        </div>
      </div>
    </div>
  );
};
