import TimeBar from '../../common/TimeBar';
import { useAppSelector } from '../../store/hook';

const HourHand = () => {
 const hour = useAppSelector((state) => state.clock.hour);
 return (
  <div>
   <TimeBar height={80} degree={`rotate(${(360 / 12) * hour}deg)`} color="red" />
  </div>
 );
};

export default HourHand;
