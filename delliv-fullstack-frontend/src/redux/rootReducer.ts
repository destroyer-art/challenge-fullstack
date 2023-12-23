import { combineReducers } from '@reduxjs/toolkit';
import ordersReducer from './reducers/ordersReducer';

const rootReducer = combineReducers({
  orders: ordersReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
