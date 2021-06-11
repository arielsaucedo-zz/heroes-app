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

    default:
      return state;
  }
};
