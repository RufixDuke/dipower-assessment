import { configureStore } from "@reduxjs/toolkit";
import ItemsSlices from "./ItemSlice";

const store = configureStore({
  reducer: {
    items: ItemsSlices,
  },
});

export default store;
