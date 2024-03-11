import TimeIndicator from './TimeIndicator';
import styled from 'styled-components';

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
const ClockUI = () => {
 return (
  <>
   <TimeIndicator />
   <Center />
  </>
 );
};

export default ClockUI;
