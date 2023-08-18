import { useEffect, useRef, useState } from 'react';
import { useSetRecoilState, useRecoilValue } from 'recoil';
// components
import { IRectProps } from '../interfaces/interfaces';
import { currentStationAtom, lineSelectAtom } from '../recoil/atoms';

function LineRect({ rectData }: IRectProps) {
  const [stroke, setStroke] = useState<string>();
  const rectRef = useRef<SVGRectElement>(null);
  const lineSelect = useRecoilValue(lineSelectAtom);
  const setCurrentStation = useSetRecoilState(currentStationAtom);

  useEffect(() => {
    const svg = rectRef.current;

    if (svg) {
      svg.addEventListener('click', () => {
        setCurrentStation(rectData.stationName);
      });
    }

    if (rectData.lines.some((line) => line === lineSelect) || !lineSelect) {
      setStroke('black');
    } else {
      setStroke('#0000003e');
    }
  }, [lineSelect, rectData.lines, rectData.stationName, setCurrentStation]);
  return (
    <rect
      width={25}
      height={25}
      x={rectData.x}
      y={rectData.y}
      rx={20}
      ry={20}
      fill="white"
      strokeWidth={5}
      stroke={stroke}
      ref={rectRef}
    />
  );
}

export default LineRect;
