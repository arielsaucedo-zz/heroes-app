import axios from "axios";
import { types } from "../types/types";

const baseUrl = process.env.REACT_APP_API_URL;

export const startSearch = (searchtext) => {
  return async (dispatch) => {
    const resp = await axios.get(`${baseUrl}/search/${searchtext}`, {});
    if (resp.data.response === "success") {
      dispatch(search(resp.data.results));
    }
  };
};

const search = (results) => {
  return {
    type: types.searchStart,
    payload: results,
  };
};
