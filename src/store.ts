import { configureStore } from '@reduxjs/toolkit';
import companiseSlice from './compnents/companiseSlice';

export const store = configureStore({
  reducer: {
    companiseReducer: companiseSlice
  }
});

export default store;
