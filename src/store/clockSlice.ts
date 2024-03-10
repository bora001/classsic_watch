import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { RootState } from './store';

// Define a type for the slice state
interface ClockSlice {
 value: number;
 hour: number;
 minute: number;
 second: number;
}

// Define the initial state using that type
const initialState: ClockSlice = {
 value: 0,
 hour: new Date().getHours(),
 minute: new Date().getMinutes(),
 second: new Date().getSeconds(),
};

export const clockSlice = createSlice({
 name: 'clock',
 initialState,
 reducers: {
  increment: (state) => {
   state.value += 1;
  },
  setHour: (state, action: PayloadAction<number>) => {
   state.hour = action.payload;
  },
  setMinutes: (state, action: PayloadAction<number>) => {
   state.minute = action.payload;
  },
  setSeconds: (state, action: PayloadAction<number>) => {
   state.second = action.payload;
  },
 },
});

export const { increment, setHour, setMinutes, setSeconds } = clockSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const clockValue = (state: RootState) => state.clock;

export default clockSlice.reducer;
