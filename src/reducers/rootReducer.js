/* Reducer principal que recopila los reducer restantes */

import { combineReducers } from "redux";

import { authReducer } from "./authReducer";
import { heroReducer } from "./heroReducer";
import { searchReducer } from "./searchReducer";

export const rootReducer = combineReducers({
  auth: authReducer,
  search: searchReducer,
  team: heroReducer,
});
