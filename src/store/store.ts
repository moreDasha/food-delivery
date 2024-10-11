import { configureStore } from '@reduxjs/toolkit';
import userSlice, { USER_DATA } from './user.slice';
import { saveState } from './store.methods';
import cartSlice, { CART_DATA } from './cart.slice';

export const store = configureStore({
  reducer: {
    user: userSlice,
    cart: cartSlice
  }
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

store.subscribe(() => {
  saveState({jwt: store.getState().user.jwt}, USER_DATA);
  saveState({products: store.getState().cart.products}, CART_DATA);
});
