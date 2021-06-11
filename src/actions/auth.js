import axios from "axios";

import { types } from "../types/types";

/* Accion: login de usuario */
export const startLogin = (email, password) => {
  return async (dispatch) => {
    const resp = await axios.post("http://challenge-react.alkemy.org/", {
      email,
      password,
    });
    const token = resp.data.token;

    if (token !== undefined) {
      localStorage.setItem("token", token);
      localStorage.setItem("user", email);

      dispatch(
        login({
          userName: email,
        })
      );
    }
  };
};

/* Accion: verifica si usuario esta autenticado*/
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

/* Accion: logout de usuario */
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
