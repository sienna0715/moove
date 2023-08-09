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
}
export interface ILineInfo {
  x1: number;
  y1: number;
  x2: number;
  y2: number;
}
export interface ICircleInfo {
  stationName: string;
  cx: number;
  cy: number;
}
export interface IRectInfo {
  stationName: string;
  width: number;
  height: number;
  x: number;
  y: number;
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
  line: string;
}
export interface ILineProps {
  lineData: ILineInfo;
  line: string;
}
export interface IPathProps {
  pathData: IPathInfo;
  line: string;
}
export interface IRectProps {
  rectData: IRectInfo;
  line: string;
}
export interface ITextProps {
  textData: ItextInfo;
}
