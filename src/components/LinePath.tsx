import { IPathProps } from '../interfaces/interfaces';

function LinePath({ pathData }: IPathProps) {
  return <path d={pathData.d} fill="none" stroke="#08A5E3" strokeWidth="8" />;
}

export default LinePath;
