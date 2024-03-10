import styled from 'styled-components';
import TimeIndicator from './TimeIndicator';
import HourIndicator from './HourIndicator';
import MinuteIndicator from './MinuteIndicator';
import SecondIndicator from './SecondIndicator';

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
 return (
  <Container>
   <Clock>
    <HourIndicator />
    <MinuteIndicator />
    <SecondIndicator />
    <TimeIndicator />
    <Center />
   </Clock>
  </Container>
 );
};

export default ClockContainer;
