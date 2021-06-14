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

  console.log(totalHeroes);

  const { maxPowerstats } = mayorPowerstats(totalHeroes);
  console.log(maxPowerstats);

  return (
    <div className="d-flex row justify-content-center">
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
        <div className="d-flex justify-content-evenly flex-wrap">
          {totalHeroes.map((hero) => (
            <div className="col m-1" key={hero.id}>
              <HeroCard {...hero} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
