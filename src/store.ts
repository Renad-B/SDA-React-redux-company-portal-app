import { configureStore } from '@reduxjs/toolkit'
import companiseSlice from './compnents/companiseSlice'

export type RootState = {
  companiseR: ReturnType<typeof companiseSlice>
}

 const store = configureStore({
  reducer: {
    companiseR: companiseSlice
  },
});

export default store;