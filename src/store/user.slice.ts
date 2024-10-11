import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { UserInitState, UserState } from './slice.interfaces';
import { loadState } from './store.methods';
import axios from 'axios';
import { LoginData } from '../pages/Login/Login.types';
import { RootState } from './store';

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

export const getProfile = createAsyncThunk<LoginData | undefined, void, { state: RootState}>(
  'user/getProfile',
  async (_, thunkApi) => {
    const jwt = thunkApi.getState().user.jwt;
    const { data } = await axios.get<LoginData[]>(
      'https://moredasha.github.io/food-delivery/backend/login.json'
    );
    const user = data.find((item) => item.access_token === jwt);
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

    builder.addCase(getProfile.fulfilled, (state, actions: PayloadAction<LoginData | undefined>) => {
      if (actions.payload) {
        state.profile = actions.payload;
      } else {
        /* error */
      }
    }); 
  }
});

export default userSlice.reducer;
export const uesrActions = userSlice.actions;
