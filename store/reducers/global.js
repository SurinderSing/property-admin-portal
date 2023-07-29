import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  token: null,
  ValidUser: true,
  userData: null,
};

const global = createSlice({
  name: "globalReducers",
  initialState,
  reducers: {
    SET_USER_TOKEN: (state, action) => {
      return {
        ...state,
        token: action.payload,
      };
    },
    SET_VALID_USER: (state, action) => {
      return {
        ...state,
        ValidUser: action.payload,
      };
    },
    SET_USER_DATA: (state, action) => {
      return {
        ...state,
        userData: action.payload,
      };
    },
  },
});

export default global.reducer;
