// authslice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface UserDataProps {
  email: string;
  password: string;
}

export interface AuthStateProps {
  isLoginStart: boolean;
  isLoggedin: boolean;
  userData: UserDataProps | null;
}

const initialState: AuthStateProps = {
  isLoggedin: false,
  isLoginStart: false,
  userData: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    loginStart: (state) => {
      state.isLoginStart = true;
      state.isLoggedin = false;
      state.userData = null;
    },
    loggedIn: (state, action: PayloadAction<UserDataProps>) => {
      state.isLoggedin = true;
      state.isLoginStart = false;
      state.userData = action.payload;
    },
    logout: (state) => {
      state.isLoggedin = false;
      state.isLoginStart = false;
      state.userData = null;
    },
  },
});

export const authReducer = authSlice.reducer;
export const { loginStart, loggedIn, logout } = authSlice.actions;
