import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { UserInitState, UserState } from './slice.interfaces';
import { loadState } from './store.methods';

export const USER_DATA = 'userData';

const initialState: UserState = {
  jwt: loadState<UserInitState>(USER_DATA)?.jwt ?? null  
};

export const userSlice = createSlice({
   name: 'user',
   initialState,
   reducers: {
    login: (state, actions: PayloadAction<string>) => {
      state.jwt = actions.payload;
    },
    logout: (state) => {
      state.jwt = null;
    }
   }
});

export default userSlice.reducer;
export const uesrActions = userSlice.actions;