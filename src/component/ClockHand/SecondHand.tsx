import { useEffect } from 'react';
import TimeBar from '../../common/TimeBar';
import { useAppDispatch, useAppSelector } from '../../store/hook';
import { setHour, setMinutes, setSeconds } from '../../store/clockSlice';

const SecondHand = () => {
 const dispatch = useAppDispatch();
 const state = useAppSelector((state) => state.clock);

 useEffect(() => {
  const intervalId = setInterval(() => {
   const hour = new Date().getHours();
   const min = new Date().getMinutes();
   const second = new Date().getSeconds();
   if (state.hour !== hour) {
    dispatch(setHour(hour));
   }
   if (state.minute !== min) {
    dispatch(setMinutes(min));
   }
   dispatch(setSeconds(second));
  }, 1000);

  return () => {
   clearInterval(intervalId);
  };
 }, [dispatch, state.hour, state.minute]);

 return (
  <div>
   <TimeBar height={115} degree={`rotate(${(360 / 60) * state.second}deg)`} />
  </div>
 );
};

export default SecondHand;
