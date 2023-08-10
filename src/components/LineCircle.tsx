import { useEffect, useRef, useState } from 'react';
import { useRecoilValue, useSetRecoilState } from 'recoil';
// components
import { ICircleProps } from '../interfaces/interfaces';
import { currentStationAtom, lineSelectAtom } from '../recoil/atoms';

function LineCircle({ circleData, line }: ICircleProps) {
  const [stroke, setStroke] = useState<string>();
  const circleRef = useRef<SVGCircleElement>(null);
  const setStationSelect = useSetRecoilState(currentStationAtom);
  const lineSelect = useRecoilValue(lineSelectAtom);

  useEffect(() => {
    const svg = circleRef.current;
    if (svg) {
      svg.addEventListener('click', () => {
        setStationSelect(circleData.stationName);
      });
    }

    if (line === 'line4') {
      if (lineSelect === 'line4' || lineSelect === '') {
        setStroke('#08A5E3');
      } else {
        setStroke('#08a5e34e');
      }
    } else if (line === 'line5') {
      if (lineSelect === 'line5' || lineSelect === '') {
        setStroke('#8300EB');
      } else {
        setStroke('#8100eb4e');
      }
    } else if (line === 'line2') {
      if (lineSelect === 'line2' || lineSelect === '') {
        setStroke('#3DB44B');
      } else {
        setStroke('#3db44b4e');
      }
    }
  }, [circleData.stationName, line, setStationSelect, lineSelect]);

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
