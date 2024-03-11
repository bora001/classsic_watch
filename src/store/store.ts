import { configureStore } from '@reduxjs/toolkit';
import clockSlice from './clockSlice';

export const store = configureStore({
 reducer: {
  clock: clockSlice,
 },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
