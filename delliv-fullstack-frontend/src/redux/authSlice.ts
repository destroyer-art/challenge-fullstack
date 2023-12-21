import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface AuthState {
  token: string | null;
}

const initialState: AuthState = {
  token: localStorage.getItem('token'),
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setToken: (state, action: PayloadAction<string>) => {
      state.token = action.payload;
    },
    login: (state, action: PayloadAction<string>) => {
      state.token = action.payload;
    },
  },
});

export const { setToken, login } = authSlice.actions;
export default authSlice.reducer;
