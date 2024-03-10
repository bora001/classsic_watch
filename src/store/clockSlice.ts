import { createSlice } from '@reduxjs/toolkit';
import { RootState } from './store';

// Define a type for the slice state
interface ClockSlice {
 value: number;
}

// Define the initial state using that type
const initialState: ClockSlice = {
 value: 0,
};

export const counterSlice = createSlice({
 name: 'clock',
 // `createSlice` will infer the state type from the `initialState` argument
 initialState,
 reducers: {
  increment: (state) => {
   state.value += 1;
  },
 },
});

export const { increment } = counterSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const clockValue = (state: RootState) => state.clock;

export default counterSlice.reducer;
