import styled from 'styled-components';
import TimeIndicator from './TimeIndicator';
import { useState } from 'react';
import TimeTooltip from './TimeTooltip';
import HourHand from './ClockHand/HourHand';
import MinuteHand from './ClockHand/MinuteHand';
import SecondHand from './ClockHand/SecondHand';

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
 position: relative;
`;

const Center = styled.span`
 position: absolute;
 top: 50%;
 left: 50%;
 transform: translate(-50%, -50%);
 width: 10px;
 height: 10px;
 border-radius: 10px;
 background-color: black;
`;

const ClockContainer = () => {
 const [isOver, setIsOver] = useState(false);
 const [[left, top], setPosition] = useState<number[]>([]);
 const onOver = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
  setPosition([e.clientX - 310, e.clientY - 240]);
  setIsOver(true);
 };

 return (
  <Container>
   <Clock onMouseMove={onOver} onMouseLeave={() => setIsOver(false)}>
    <TimeTooltip {...{ left, top, isOver }} />
    <HourHand />
    <MinuteHand />
    <SecondHand />
    <TimeIndicator />
    <Center />
   </Clock>
  </Container>
 );
};

export default ClockContainer;
