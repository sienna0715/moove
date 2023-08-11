import { useEffect, useState } from 'react';
import { useRecoilValue } from 'recoil';
import { ITextProps } from '../interfaces/interfaces';
import { lineSelectAtom } from '../recoil/atoms';

function LineText({ textData, line }: ITextProps) {
  const [fill, setFill] = useState(textData.fill);
  const lineSelect = useRecoilValue(lineSelectAtom);

  useEffect(() => {
    if (fill === 'gray' || fill === '#8080804e') {
      if (line === lineSelect || !lineSelect) {
        setFill('gray');
      } else {
        setFill('#8080804e');
      }
    } else if (fill === 'black' || fill === '#0000004e') {
      if (line === lineSelect || !lineSelect) {
        setFill('black');
      } else {
        setFill('#0000004e');
      }
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [line, lineSelect]);

  return (
    <text
      x={textData.x}
      y={textData.y}
      dx={textData.dx}
      dy={textData.dy}
      fill={fill}
      fontSize={20}
      fontWeight={800}
    >
      {textData.value}
      {textData.tValue ? (
        <tspan dx={textData.tdx} dy={textData.tdy}>
          {textData.tValue}
        </tspan>
      ) : null}
      {textData.tValue1 ? (
        <tspan dx={textData.tdx} dy={textData.tdy}>
          {textData.tValue1}
        </tspan>
      ) : null}
    </text>
  );
}

export default LineText;
