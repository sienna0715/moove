import { ICircleProps } from "../interfaces/interfaces";

function LineCircle({ circleData }: ICircleProps) {
  return (
    <circle
      cx={circleData.cx}
      cy={circleData.cy}
      r={5}
      fill="white"
      strokeWidth={5}
      stroke="#08A5E3"
    />
  );
}

export default LineCircle;
