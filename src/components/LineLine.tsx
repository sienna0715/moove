import { useEffect, useState } from 'react';
import { ILineProps } from '../interfaces/interfaces';

function LineLine({ lineData, line }: ILineProps) {
  const [stroke, setStroke] = useState<string>();

  useEffect(() => {
    if (line === 'line4') {
      setStroke('#08A5E3');
    } else if (line === 'line5') {
      setStroke('#8300EB');
    } else if (line === 'line2') {
      setStroke('#3DB44B');
    }
  }, [line]);

  return (
    <line
      x1={lineData.x1}
      y1={lineData.y1}
      x2={lineData.x2}
      y2={lineData.y2}
      strokeWidth="8"
      stroke={stroke}
    />
  );
}

export default LineLine;
