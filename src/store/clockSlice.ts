import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { RootState } from './store';

interface ClockSlice {
 hour: number;
 minute: number;
 second: number;
}

const initialState: ClockSlice = {
 hour: new Date().getHours(),
 minute: new Date().getMinutes(),
 second: new Date().getSeconds(),
};

export const clockSlice = createSlice({
 name: 'clock',
 initialState,
 reducers: {
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

export const { setHour, setMinutes, setSeconds } = clockSlice.actions;

export const clockValue = (state: RootState) => state.clock;

export default clockSlice.reducer;
