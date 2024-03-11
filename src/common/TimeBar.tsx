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
  top: ${({ height }) => `${150 - height}px`};
  height: ${({ height }) => `${height}px`};
  background: #000;
  content: '';
 }
 transform: ${({ $degree }) => $degree};
`;
const TimeBar = ({ degree, height }: { degree: string; height: number }) => {
 return <TimeBarComponent height={height} $degree={degree} />;
};

export default TimeBar;
