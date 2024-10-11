import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CartInitState, CartState } from './slice.interfaces';
import { loadState } from './store.methods';

export const CART_DATA = 'cartData';

const initialState: CartState = {
  products: loadState<CartInitState>(CART_DATA)?.products ?? []
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
    },
    cleanCart: (state) => {
      state.products = [];
    }
  }
});

export default cartSlice.reducer;
export const cartActions = cartSlice.actions;
