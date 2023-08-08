import { IPathProps } from '../interfaces/interfaces';

function LinePath({ pathData }: IPathProps) {
  return (
    <path
      d={pathData.d}
      fill="none"
      stroke={pathData.color}
      strokeWidth="8"
    />
  );
}

export default LinePath;
