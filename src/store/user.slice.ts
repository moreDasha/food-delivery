import { createSlice } from '@reduxjs/toolkit';
import { UserState } from './slice.interfaces';

const initialState: UserState = {
  jwt: null
};

export const userSlice = createSlice({
   name: 'user',
   initialState,
   reducers: {
    login: (state) => {
      state.jwt = '';
    },
    logout: (state) => {
      state.jwt = null;
    }
   }
});

export default userSlice.reducer;
export const uesrActions = userSlice.actions;