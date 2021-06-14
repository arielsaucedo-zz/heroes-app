import React from "react";
import { heightWeight } from "../../helpers/heightWeight";

export const TableAppearance = ({ totalHeroes }) => {
  const { promedioHeight, promedioWeight } = heightWeight(totalHeroes);

  return (
    <table className="table table-dark table-hover mt-4">
      <thead>
        <tr className="text-center">
          <th scope="col">Height</th>
          <th scope="col">Weight</th>
        </tr>
      </thead>
      <tbody>
        <tr className="text-center">
          <td>{promedioHeight}</td>
          <td>{promedioWeight}</td>
        </tr>
      </tbody>
    </table>
  );
};
