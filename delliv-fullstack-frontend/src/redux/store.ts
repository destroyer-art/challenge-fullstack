import { combineReducers, configureStore } from '@reduxjs/toolkit';

import orderReducer from './orderSlice';
import authReducer from './reducers/authReducer';

const rootReducer = combineReducers({
  auth: authReducer,
});

const store = configureStore({
  reducer: {
    orders: orderReducer,
  },
});

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;

export default store;