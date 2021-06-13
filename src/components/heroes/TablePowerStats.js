import React from "react";
import { powerstats } from "../../helpers/powerstats";

export const TablePowerStats = ({ totalHeroes }) => {
  const {
    totalCombat,
    totalDurability,
    totalIntelligence,
    totalPower,
    totalSpeed,
    totalStrength,
  } = powerstats(totalHeroes);

  return (
    <table className="table table-dark table-hover mt-4">
      <thead>
        <tr className="text-center">
          <th scope="col">Combat</th>
          <th scope="col">Durability</th>
          <th scope="col">Intelligence</th>
          <th scope="col">Power</th>
          <th scope="col">Speed</th>
          <th scope="col">Strength</th>
        </tr>
      </thead>
      <tbody>
        <tr className="text-center">
          <td>{totalCombat}</td>
          <td>{totalDurability}</td>
          <td>{totalIntelligence}</td>
          <td>{totalPower}</td>
          <td>{totalSpeed}</td>
          <td>{totalStrength}</td>
        </tr>
      </tbody>
    </table>
  );
};
