import styled from 'styled-components';
import { useState } from 'react';
import TimeTooltip from './TimeTooltip';
import ClockHandBox from './ClockHand/ClockHandBox';
import ClockUI from './ClockUI/ClockUI';

const Container = styled.div`
 width: 100vw;
 height: 100vh;
 overflow: hidden;
 display: flex;
 align-items: center;
 justify-content: center;
`;

const Clock = styled.div`
 width: 300px;
 height: 300px;
 border-radius: 300px;
 border: 10px solid black;
`;

const ClockContainer = () => {
 const [isOver, setIsOver] = useState(false);
 const [[left, top], setPosition] = useState<number[]>([]);
 const onOver = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
  setPosition([e.clientX + 5, e.clientY - 20]);
  setIsOver(true);
 };

 return (
  <Container>
   <Clock onMouseMove={onOver} onMouseLeave={() => setIsOver(false)}>
    <TimeTooltip {...{ left, top, isOver }} />
    <ClockHandBox />
    <ClockUI />
   </Clock>
  </Container>
 );
};

export default ClockContainer;
