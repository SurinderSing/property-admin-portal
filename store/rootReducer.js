// store/rootReducer.js
import { combineReducers } from "@reduxjs/toolkit";
import globalReducer from "./reducers/global";

const rootReducer = combineReducers({
  global: globalReducer,
});

export default rootReducer;
