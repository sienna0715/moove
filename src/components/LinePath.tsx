import { useEffect, useState } from 'react';
import { IPathProps } from '../interfaces/interfaces';

function LinePath({ pathData, line }: IPathProps) {
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

  return <path d={pathData.d} fill="none" stroke={stroke} strokeWidth="8" />;
}

export default LinePath;
