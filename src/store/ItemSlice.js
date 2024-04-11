import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  items: [],
  //   isLoading: false,
  //   error: null,
};

const ItemsSlice = createSlice({
  name: "items",
  initialState,
  reducers: {
    setItems: (state, payload) => {
      state.items = payload.payload;
    },
    // setIsLoading: (state, payload) => {
    //   state.isLoading = payload.payload;
    // },
    // setError: (state, payload) => {
    //   state.error = payload.payload;
    // },
  },
});

export const { setItems } = ItemsSlice.actions;

const ItemsSlices = ItemsSlice.reducer;
export default ItemsSlices;
