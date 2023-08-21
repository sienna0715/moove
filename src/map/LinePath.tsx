import { useEffect, useState } from 'react';
import { useRecoilValue } from 'recoil';
import { IPathProps } from '../interfaces/interfaces';
import { lineSelectAtom } from '../recoil/atoms';

function LinePath({ pathData, line }: IPathProps) {
  const [stroke, setStroke] = useState<string>();
  const lineSelect = useRecoilValue(lineSelectAtom);

  useEffect(() => {
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
  }, [line, lineSelect]);

  return <path d={pathData.d} fill="none" stroke={stroke} strokeWidth="19" />;
}

export default LinePath;
