import { ITextProps } from "../interfaces/interfaces";

function LineText({ textData }: ITextProps) {
  return (
    <text
      x={textData.x}
      y={textData.y}
      dx={textData.dx}
      dy={textData.dy}
      fill={textData.fill}
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
