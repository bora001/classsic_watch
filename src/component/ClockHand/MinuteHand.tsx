import TimeBar from '../../common/TimeBar';
import { useAppSelector } from '../../store/hook';

const MinuteHand = () => {
 const minutes = useAppSelector((state) => state.clock.minute);

 return (
  <div>
   <TimeBar height={105} degree={`rotate(${(360 / 60) * minutes}deg)`} />
  </div>
 );
};

export default MinuteHand;
