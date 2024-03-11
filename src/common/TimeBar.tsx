import styled from 'styled-components';
import { CLOCK_VALUE, TIME_HAND_VALUE } from '../constants/common';

export interface TimeProps {
 $degree: number;
}
export interface TimeBarComponentProps {
 $degree: string;
 height: number;
}
const TimeBarComponent = styled.span<TimeBarComponentProps>`
 position: absolute;
 left: 50%;
 height: ${CLOCK_VALUE.size}px;
 &:after {
  position: absolute;
  left: ${({ color }) =>
   `calc(50% - ${color ? TIME_HAND_VALUE.hour / 2 : TIME_HAND_VALUE.normal / 2}px)`};
  width: ${({ color }) => `${color ? TIME_HAND_VALUE.hour : TIME_HAND_VALUE.normal}px`};
  top: ${({ height }) => `${CLOCK_VALUE.size / 2 - height}px`};
  height: ${({ height }) => `${height}px`};
  background: ${({ color }) => `${color ?? '#000'}`};
  content: '';
 }
 transform: ${({ $degree }) => $degree};
`;
const TimeBar = ({ degree, height, color }: { degree: string; height: number; color?: string }) => {
 return <TimeBarComponent height={height} $degree={degree} color={color} />;
};

export default TimeBar;
