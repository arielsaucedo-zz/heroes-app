import React from "react";

export const HeroCard = ({ name, image, powerstats }) => {
  return (
    <div className="card d-flex flex-row rounded" style={{ maxWidth: 400 }}>
      <div>
        <img src={image.url} alt="hero" width="200" />
      </div>
      <div className="m-2 text-dark">
        <h4>{name}</h4>
        <br />
        <div className="text-start">
          <li>Intelligence: {powerstats.intelligence}</li>
          <li>Strength: {powerstats.strength}</li>
          <li>Speed: {powerstats.speed}</li>
          <li>Durability: {powerstats.durability}</li>
          <li>Power: {powerstats.power}</li>
          <li>Combat: {powerstats.combat}</li>
          <div className="mt-3 d-flex justify-content-around">
            <button className="btn btn-primary">Detalle</button>
            &nbsp;
            <button className="btn btn-danger">Eliminar</button>
          </div>
        </div>
      </div>
    </div>
  );
};
