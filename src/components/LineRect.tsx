import { useEffect, useRef, useState } from 'react';
import { useSetRecoilState } from 'recoil';
// componetns
import { IRectProps } from '../interfaces/interfaces';
import { currentAtom } from '../recoil/atoms';

function LineRect({ rectData, line }: IRectProps) {
  const [stroke, setStroke] = useState<string>();
  const rectRef = useRef<SVGRectElement>(null);
  const setCurrentStation = useSetRecoilState(currentAtom);

  useEffect(() => {
    const svg = rectRef.current;

    if (svg) {
      svg.addEventListener('click', () => {
        setCurrentStation(rectData.stationName);
      });
    }

    if (line === 'line4') {
      setStroke('#08A5E3');
    } else if (line === 'line5') {
      setStroke('#8300EB');
    } else if (line === 'line2') {
      setStroke('#3DB44B');
    }
  }, [rectData.stationName, line, setCurrentStation]);
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
