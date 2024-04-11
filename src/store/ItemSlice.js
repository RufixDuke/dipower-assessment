import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};

const ItemsSlice = createSlice({
  name: "items",
  initialState,
  reducers: {
    setItems: (state, payload) => {
      state.items = payload.payload;
    },
  },
});

export const { setItems } = ItemsSlice.actions;

const ItemsSlices = ItemsSlice.reducer;
export default ItemsSlices;
