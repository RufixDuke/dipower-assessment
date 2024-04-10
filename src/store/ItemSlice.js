import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  items: [],
  isLoading: false,
  error: null,
};

const ItemsSlice = createSlice({
  name: "items",
  initialState,
  reducers: {
    setItems: (state, payload) => {
      state.items = payload.payload;
    },
    setIsLoading: (state, payload) => {
      state.isLoading = payload.payload;
    },
    setError: (state, payload) => {
      state.error = payload.payload;
    },
  },
});

export const { setItems, setError, setIsLoading } = ItemsSlice.actions;

export const fetchItems = () => async (dispatch) => {
  try {
    dispatch(setIsLoading(true));
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/albums/1/photos"
    );
    dispatch(setItems(response?.data));
  } catch (err) {
    dispatch(setError(err.message));
  } finally {
    dispatch(setIsLoading(false));
  }
};

const ItemsSlices = ItemsSlice.reducer;
export default ItemsSlices;
