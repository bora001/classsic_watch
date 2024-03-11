import styled from 'styled-components';
import { makeLengthTwo } from '../utils/makeLengthTwo';
import { useAppSelector } from '../store/hook';

export interface ShowTimeProps {
 $left: number;
 $top: number;
 $isOver: boolean;
}

const ShowTime = styled.span<ShowTimeProps>`
 position: absolute;
 width: 60px;
 line-height: 20px;
 background-color: black;
 color: white;
 text-align: center;
 top: ${({ $top }) => `${$top}px`};
 left: ${({ $left }) => `${$left}px`};
 opacity: ${({ $isOver }) => `${$isOver ? 1 : 0}`};
 z-index: 1;
`;

const TimeTooltip = ({ left, top, isOver }: { left: number; top: number; isOver: boolean }) => {
 const { hour, minute, second } = useAppSelector((state) => state.clock);

 return (
  <ShowTime $left={left} $top={top} $isOver={isOver}>
   {`${makeLengthTwo(hour)}:${makeLengthTwo(minute)}:${makeLengthTwo(second)}`}
  </ShowTime>
 );
};

export default TimeTooltip;
