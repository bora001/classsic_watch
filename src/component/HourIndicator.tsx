import TimeBar from '../common/TimeBar';
import { useAppSelector } from '../store/hook';

const HourIndicator = () => {
 const hour = useAppSelector((state) => state.clock.hour);
 return (
  <div>
   <TimeBar height={90} degree={`rotate(${(360 / 12) * hour}deg)`} />
  </div>
 );
};

export default HourIndicator;
