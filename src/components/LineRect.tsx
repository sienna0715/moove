import { useEffect, useRef } from 'react';
import { IRectProps } from '../interfaces/interfaces';

function LineRect({ rectData }: IRectProps) {
  const rectRef = useRef<SVGRectElement>(null);

  useEffect(() => {
    const svg = rectRef.current;
    if (svg) {
      svg.addEventListener('click', () => {
        console.log(rectData.stationName);
      });
    }
  }, [rectData.stationName]);
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
      stroke={rectData.color}
      ref={rectRef}
    />
  );
}

export default LineRect;
