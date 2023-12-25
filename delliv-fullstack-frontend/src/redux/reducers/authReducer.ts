import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { UserType } from '../../types/userTypes';

interface AuthState {
  user: null | UserType;
  error: null | { message: string; statusCode: number };
}

const initialState: AuthState = {
  user: null,
  error: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    loginSuccess: (state, action: PayloadAction<UserType>) => {
      state.user = action.payload;
      state.error = null;
    },
    loginFailure: (state, action: PayloadAction<{ message: string; statusCode: number }>) => {
      state.user = null;
      state.error = action.payload;
    },
  },
});

export const { loginSuccess, loginFailure } = authSlice.actions;
export default authSlice.reducer;
