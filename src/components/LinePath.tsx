interface IPathProps {
  pathData: IPathInfo;
}

interface IPathInfo {
  d: string;
}

function LinePath({ pathData }: IPathProps) {
  return <path d={pathData.d} fill="none" stroke="#08A5E3" strokeWidth="8" />;
}

export default LinePath;
