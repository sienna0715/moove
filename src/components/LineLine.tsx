import { ILineProps } from '../interfaces/interfaces';

function LineLine({ lineData }: ILineProps) {
  return (
    <line
      x1={lineData.x1}
      y1={lineData.y1}
      x2={lineData.x2}
      y2={lineData.y2}
      strokeWidth="8"
      stroke={lineData.color}
    />
  );
}

export default LineLine;
