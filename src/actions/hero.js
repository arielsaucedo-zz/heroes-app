import { types } from "../types/types";

export const addNewGoodHero = (hero) => {
  return {
    type: types.addNewGoodHero,
    payload: hero,
  };
};

export const addNewBadHero = (hero) => {
  return {
    type: types.addNewBadHero,
    payload: hero,
  };
};

export const deleteGoodHero = (id) => {
  return {
    type: types.deleteGoodHero,
    payload: id,
  };
};

export const deleteBadHero = (id) => {
  return {
    type: types.deleteBadHero,
    payload: id,
  };
};
