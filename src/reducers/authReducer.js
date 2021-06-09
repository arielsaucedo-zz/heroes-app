import { types } from "../types/types";

const initialState = {
  logged: false,
  userName: "",
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.authLogin:
      return {
        ...state,
        logged: true,
        ...action.payload,
      };

    case types.authStartLogin:
      return {
        logged: true,
        userName: action.payload,
      };

    case types.authLogout:
      return {
        logged: false,
        userName: "",
      };

    default:
      return state;
  }
};
