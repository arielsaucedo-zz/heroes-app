import React from "react";
import { HeroCardDetails } from "./HeroCardDetails";

export const HeroesDetails = () => {
  return (
    <div className="d-flex row justify-content-center">
      <h1 className="text-center">Detalle</h1>
      <div className="container mt-4 mb-4">
        <div className="d-flex justify-content-evenly flex-wrap">
          <HeroCardDetails />
        </div>
      </div>
    </div>
  );
};
