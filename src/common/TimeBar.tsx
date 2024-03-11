import styled from 'styled-components';

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
 height: 300px;
 &:after {
  left: calc(50% - 1.5px);
  position: absolute;
  width: 3px;
  width: ${({ color }) => `${color ? 4 : 1.5}px`};
  top: ${({ height }) => `${150 - height}px`};
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
