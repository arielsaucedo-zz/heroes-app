import axios from "axios";
import { types } from "../types/types";

export const startLogin = (email, password) => {
  return async (dispatch) => {
    const resp = await axios.post("http://challenge-react.alkemy.org/", {
      email,
      password,
    });
    const token = resp.data.token;

    if (token !== "") {
      localStorage.setItem("token", token);
      localStorage.setItem("user", email);

      dispatch(
        login({
          userName: email,
        })
      );
    } else {
      console.log("No se pudo loguear");
    }
  };
};

export const startChecking = () => {
  return (dispatch) => {
    let user = localStorage.getItem("user");
    dispatch(checking(user));
  };
};

const login = (user) => {
  return {
    type: types.authLogin,
    payload: user,
  };
};

const checking = (user) => {
  return {
    type: types.authStartLogin,
    payload: user,
  };
};

export const startLogout = () => {
  return (dispatch) => {
    localStorage.clear();
    dispatch(logout());
  };
};

const logout = () => {
  return {
    type: types.authLogout,
  };
};
