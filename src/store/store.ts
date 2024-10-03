import { configureStore } from '@reduxjs/toolkit';
import userSlice, { USER_DATA } from './user.slice';
import { saveState } from './store.methods';

export const store = configureStore({
  reducer: {
    user: userSlice
  }
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

store.subscribe(() => {
  saveState({jwt: store.getState().user.jwt}, USER_DATA);
});
