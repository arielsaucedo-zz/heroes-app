import React from "react";

export const HeroCard = () => {
  return (
    <div className="card d-flex flex-row" style={{ maxWidth: 400 }}>
      <div>
        <img
          src="https://www.superherodb.com/pictures2/portraits/10/100/10431.jpg"
          alt="hero"
          width="200"
        />
      </div>
      <div className="m-2 text-dark">
        <h4>Nombre de Hero</h4>
        <br />
        <div className="text-start">
          <li>Intelligence</li>
          <li>Strength</li>
          <li>Speed</li>
          <li>Durability</li>
          <li>Power</li>
          <li>Combat</li>
          <div className="mt-3 d-flex justify-content-around">
            <button className="btn btn-primary">Detalle</button>
            <button className="btn btn-danger ml-2">Eliminar</button>
          </div>
        </div>
      </div>
    </div>
  );
};
