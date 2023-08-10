import { useEffect, useRef, useState } from 'react';
import { useSetRecoilState, useRecoilValue } from 'recoil';
// components
import { IRectProps } from '../interfaces/interfaces';
import { currentStationAtom, lineSelectAtom } from '../recoil/atoms';

function LineRect({ rectData, line }: IRectProps) {
  const [stroke, setStroke] = useState<string>();
  const rectRef = useRef<SVGRectElement>(null);
  const setStationSelect = useSetRecoilState(currentStationAtom);
  const lineSelect = useRecoilValue(lineSelectAtom);

  useEffect(() => {
    const svg = rectRef.current;

    if (svg) {
      svg.addEventListener('click', () => {
        setStationSelect(rectData.stationName);
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
  }, [rectData.stationName, line, setStationSelect, lineSelect]);
  return (
    <rect
      width={rectData.width}
      height={rectData.height}
      x={rectData.x}
      y={rectData.y}
      rx={8}
      ry={8}
      fill="white"
      strokeWidth={5}
      stroke={stroke}
      ref={rectRef}
    />
  );
}

export default LineRect;
