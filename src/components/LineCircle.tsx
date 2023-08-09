import { useEffect, useRef, useState } from 'react';
import { ICircleProps } from '../interfaces/interfaces';

function LineCircle({ circleData, line }: ICircleProps) {
  const [stroke, setStroke] = useState<string>();
  const circleRef = useRef<SVGCircleElement>(null);

  useEffect(() => {
    const svg = circleRef.current;
    if (svg) {
      svg.addEventListener('click', () => {
        console.log(circleData.stationName);
      });
    }

    if (line === 'line4') {
      setStroke('#08A5E3');
    } else if (line === 'line5') {
      setStroke('#8300EB');
    } else if (line === 'line2') {
      setStroke('#3DB44B');
    }
  }, [circleData.stationName, line]);

  return (
    <circle
      cx={circleData.cx}
      cy={circleData.cy}
      r={5}
      fill="white"
      strokeWidth={5}
      stroke={stroke}
      ref={circleRef}
    />
  );
}

export default LineCircle;
