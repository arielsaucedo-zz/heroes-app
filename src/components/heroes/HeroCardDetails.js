import React from "react";
import { Link } from "react-router-dom";

import { useParams } from "react-router-dom";
import { useHeroes } from "../../hooks/useHeroes";

export const HeroCardDetails = () => {
  const { id } = useParams();

  const { totalHeroes } = useHeroes();

  const heroDetails = totalHeroes.filter((hero) => {
    return hero.id === id;
  });

  const { appearance, name, work, image, biography } = heroDetails[0];

  return (
    <div className="card d-flex flex-row rounded" style={{ maxWidth: 800 }}>
      <div>
        <img src={image.url} alt="hero" width="200" />
      </div>
      <div className="m-2 text-dark">
        <h4>{name}</h4>
        <br />
        <div className="text-start">
          <li>Aliases: {biography.aliases.join(", ")}</li>
          <li>Weight: {appearance.weight[1]}</li>
          <li>Height: {appearance.height[1]}</li>
          <li>Eye Color: {appearance["eye-color"]}</li>
          <li>Hair Color: {appearance["hair-color"]}</li>
          <li>Work base: {work.base}</li>
          <div className="mt-3 d-flex justify-content-around">
            <Link to="/heroes">
              <button className="btn btn-primary">Volver</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
