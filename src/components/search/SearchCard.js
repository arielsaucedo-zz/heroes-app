import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Swal from "sweetalert2";

import { addNewBadHero, addNewGoodHero } from "../../actions/hero";

export const SearchCard = ({ id, name, image }) => {
  const dispatch = useDispatch();
  const { results } = useSelector((state) => state.search);
  const state = useSelector((state) => state.team);

  const handleHeroClick = () => {
    const newHero = results.filter((hero) => hero.id === id);
    const { biography } = newHero[0];

    if (biography.alignment === "good") {
      const heroInTeam = state.good.filter((hero) => hero.id === id);

      if (heroInTeam[0] !== newHero[0] && state.good.length < 3) {
        dispatch(addNewGoodHero(newHero));
      } else {
        Swal.fire("No es posible sumar a este heroe a tu equipo");
      }
    } else {
      const heroInTeam = state.bad.filter((hero) => hero.id === id);

      if (heroInTeam[0] !== newHero[0] && state.bad.length < 3) {
        dispatch(addNewBadHero(newHero));
      } else {
        Swal.fire("No es posible sumar a este heroe a tu equipo");
      }
    }
  };

  return (
    <div className="card d-flex flex-column rounded" style={{ maxWidth: 200 }}>
      <div>
        <img src={image.url} alt={name} className="img-thumbnail img-fluid" />
      </div>
      <div className="m-2 text-dark d-flex flex-column justify-content-around">
        <h4>{name}</h4>
        <br />
        <div className="text-center">
          <div className="mt-3 d-flex justify-content-around">
            <button className="btn btn-success w-100" onClick={handleHeroClick}>
              Agregar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
