import TimeBar from '../../common/TimeBar';
import { useAppSelector } from '../../store/hook';

const HourHand = () => {
 const hour = useAppSelector((state) => state.clock.hour);
 return (
  <div>
   <TimeBar height={85} degree={`rotate(${(360 / 12) * hour}deg)`} />
  </div>
 );
};

export default HourHand;
