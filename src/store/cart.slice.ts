import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CartState } from './slice.interfaces';

const initialState: CartState = {
  products: []
}; 

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addProduct: (state, action: PayloadAction<number>) => {
      const product = state.products.find((item) => (item.id === action.payload));

      if (!product) {
        state.products.push({id: action.payload, amount: 1});
        return;
      }

      state.products.map((item) => {
        if (item.id === action.payload) {
          item.amount += 1;
        }
        return item;
      });
    },
    removeProduct: (state, action: PayloadAction<number>) => {
      const product = state.products.find((item) => (item.id === action.payload));
      if (!product) {
        return;
      } else {
        if (product.amount === 1) {
          state.products = state.products.filter((item) => (item.id !== action.payload));
        } else {
          state.products.map((item) => {
            if (item.id === action.payload) {
              item.amount -= 1;
            }
            return item;
          });
        }
      }
    }
  }
});

export default cartSlice.reducer;
export const cartActions = cartSlice.actions;
