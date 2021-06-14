import React from "react";
import { useSelector } from "react-redux";
import { mayorPowerstats } from "../../helpers/mayorPowerstats";

import { HeroCard } from "./HeroCard";
import { TableAppearance } from "../tables/TableAppearance";
import { TablePowerStats } from "../tables/TablePowerStats";

export const HeroesScreen = () => {
  const { good } = useSelector((state) => state.team);
  const { bad } = useSelector((state) => state.team);

  const totalHeroes = [...good, ...bad];

  const { maxPowerstats } = mayorPowerstats(totalHeroes);

  return (
    <div className="d-flex row justify-content-center">
      {totalHeroes.length > 0 ? (
        <>
          <h1 className="text-center">Este es tu equipo</h1>
          <div>
            <h3 className="text-center mt-4">
              El rasgo principal de tu equipo es: {maxPowerstats}
            </h3>
          </div>
          <div>
            <h3 className="text-center mt-4">Total de powerstats</h3>
            <TablePowerStats totalHeroes={totalHeroes} />
          </div>
          <br />
          <div>
            <h3 className="text-center mt-4">Altura y peso promedio</h3>
            <TableAppearance totalHeroes={totalHeroes} />
          </div>
          <div className="container mt-4 mb-4">
            <div className="d-flex justify-content-evenly flex-wrap m-1">
              {totalHeroes.map((hero) => (
                <div className="col m-1" key={hero.id}>
                  <HeroCard {...hero} />
                </div>
              ))}
            </div>
          </div>
        </>
      ) : (
        <>
          <h1 className="text-center mt-4">
            Utiliza el buscador para armar tu equipo de superheroes
          </h1>
          <img
            className="mt-2 mb-4"
            src="https://www.perspectiva.gt/wp-content/uploads/650_1200.png"
            alt="hero-home"
          />
        </>
      )}
    </div>
  );
};
