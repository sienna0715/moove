interface IRectProps {
  rectData: IRectInfo;
}

interface IRectInfo {
  stationName: string;
  width: number;
  height: number;
  x: number;
  y: number;
}

function Lin4Rect({ rectData }: IRectProps) {
  return (
    <rect
      width={rectData.width}
      height={rectData.height}
      x={rectData.x}
      y={rectData.y}
      rx={8}
      ry={8}
      fill="white"
      strokeWidth={5}
      stroke="#08A5E3"
    />
  );
}

export default Lin4Rect;
