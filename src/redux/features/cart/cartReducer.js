import { createSlice } from "@reduxjs/toolkit";

export const cartReducer = createSlice({
  name: "cart",
  initialState: {
    products: [],
  },
  reducers: {
    addProductToCart: (state, action) => {
      const product = state.products.find((i) => i.id === action.payload.id);
      if (product) {
        product.qty += action.payload.qty;
      } else {
        state.products.push(action.payload);
      }
    },
  },
});

export const { addProductToCart } = cartReducer.actions;
export default cartReducer.reducer;
