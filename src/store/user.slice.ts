import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { UserInitState, UserState } from './slice.interfaces';
import { loadState } from './store.methods';
import axios from 'axios';
import { LoginData } from '../pages/Login/Login.types';

export const USER_DATA = 'userData';

const initialState: UserState = {
  jwt: loadState<UserInitState>(USER_DATA)?.jwt ?? null
};

export const login = createAsyncThunk(
  'user/login',
  async (params: { email: string; password: string }) => {
    const { data } = await axios.get<LoginData[]>(
      'https://moredasha.github.io/food-delivery/backend/login.json'
    );
    const user = data.find(
      (item) => item.email === params.email && item.password === params.password
    );
    return user;
  }
);

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    clearLoginError: (state) => {
      state.loginErrorMessage = undefined;
    },
    logout: (state) => {
      state.jwt = null;
    }
  },
  extraReducers: (builder) => {
    builder.addCase(login.fulfilled, (state, actions: PayloadAction<LoginData | undefined>) => {
      if (actions.payload) {
        state.jwt = actions.payload.access_token;
      } else {
        state.loginErrorMessage = 'Неверный логин или пароль';
      }
    });
    builder.addCase(login.rejected, (state, actions) => {
      state.loginErrorMessage = actions.error.message;
    });
  }
});

export default userSlice.reducer;
export const uesrActions = userSlice.actions;
