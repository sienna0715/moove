export interface IDataInfo {
  line2: ILineDatasInfo;
  line4: ILineDatasInfo;
  line5: ILineDatasInfo;
}

export interface ILineDatasInfo {
  path: IPathInfo[];
  line: ILineInfo[];
  circle: ICircleInfo[];
  rect: IRectInfo[];
  text: ItextInfo[];
}
export interface IPathInfo {
  d: string;
  color?: string;
}
export interface ILineInfo {
  x1: number;
  y1: number;
  x2: number;
  y2: number;
  color?: string;
}
export interface ICircleInfo {
  stationName: string;
  cx: number;
  cy: number;
  color?: string;
}
export interface IRectInfo {
  stationName: string;
  width: number;
  height: number;
  x: number;
  y: number;
  color?: string;
}
export interface ItextInfo {
  value: string;
  x: number;
  y: number;
  dx?: number;
  dy?: number;
  tdx?: number;
  tdy?: number;
  tValue?: string;
  tValue1?: string;
  fill: string;
}

export interface ICircleProps {
  circleData: ICircleInfo;
}
export interface ILineProps {
  lineData: ILineInfo;
}
export interface IPathProps {
  pathData: IPathInfo;
}
export interface IRectProps {
  rectData: IRectInfo;
}
export interface ITextProps {
  textData: ItextInfo;
}
