import { combineReducers } from '@reduxjs/toolkit';
import orderReducer from './orderSlice';

const rootReducer = combineReducers({
  orders: orderReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;