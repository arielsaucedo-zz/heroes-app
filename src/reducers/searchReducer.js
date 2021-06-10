import { types } from "../types/types";

const initialState = {
  search: null,
  results: [],
};

export const searchReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.searchStart:
      return {
        ...state,
        search: "ok",
        results: [...action.payload],
      };

    default:
      return state;
  }
};
