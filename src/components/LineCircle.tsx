import { useEffect, useRef } from 'react';
import { ICircleProps } from '../interfaces/interfaces';

function LineCircle({ circleData }: ICircleProps) {
  const circleRef = useRef<SVGCircleElement>(null);

  useEffect(() => {
    const svg = circleRef.current;
    if (svg) {
      svg.addEventListener('click', () => {
        console.log(circleData.stationName);
      });
    }
  }, [circleData.stationName]);
  return (
    <circle
      cx={circleData.cx}
      cy={circleData.cy}
      r={5}
      fill="white"
      strokeWidth={5}
      stroke="#08A5E3"
      ref={circleRef}
    />
  );
}

export default LineCircle;
