import styled from 'styled-components';
const TimeContainer = styled.div`
 position: relative;
`;

interface TimeProps {
 degree: number;
}
const Time = styled.span<TimeProps>`
 position: absolute;
 top: 10px;
 width: 30px;
 left: -15px;
 transform: ${({ degree }) => `rotate(${(degree + 1) * -(360 / 12)}deg)`};
 text-align: center;
`;

const Bar = styled.span<TimeProps>`
 position: absolute;
 left: 50%;
 height: 300px;
 transform: ${({ degree }) => `rotate(${(degree + 1) * (360 / 12)}deg)`};
`;

const TimeIndicator = () => {
 const time = Array.from({ length: 12 }, (v, i) => i + 1);
 return (
  <TimeContainer>
   {time.map((key, index) => (
    <Bar key={key} degree={index}>
     <Time degree={index}>{key}</Time>
    </Bar>
   ))}
  </TimeContainer>
 );
};

export default TimeIndicator;
