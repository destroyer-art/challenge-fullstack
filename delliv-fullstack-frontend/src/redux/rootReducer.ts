import { combineReducers } from '@reduxjs/toolkit';
import orderReducer from './orderSlice';
import authReducer from './authSlice';

const rootReducer = combineReducers({
  orders: orderReducer,
  auth: authReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;