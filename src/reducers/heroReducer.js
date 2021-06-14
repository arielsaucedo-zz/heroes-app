import { types } from "../types/types";

const initialState = {
  good: [],
  bad: [],
};

export const heroReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.addNewGoodHero:
      return {
        ...state,
        good: [...action.payload, ...state.good],
      };

    case types.addNewBadHero:
      return {
        ...state,
        bad: [...action.payload, ...state.bad],
      };

    case types.deleteGoodHero:
      return {
        ...state,
        good: state.good.filter((hero) => hero.id !== action.payload),
      };

    case types.deleteBadHero:
      return {
        ...state,
        bad: state.bad.filter((hero) => hero.id !== action.payload),
      };

    default:
      return state;
  }
};
