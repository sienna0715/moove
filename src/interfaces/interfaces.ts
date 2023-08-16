export interface IDetailStationSearchDropdownProps {
  filteredStationNames: string[];
}

export interface IDetailStationSearchInputProps {
  searchInput: string;
  stationNames: string[];
  setSearchInput: (state: string) => void;
  setFilteredStationNames: (state: string[]) => void;
}

export interface IDetailStationLineButtonProps {
  value: string;
  line: string;
}

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
  lines: string[];
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
  lines?: string[];
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
}
export interface ITextProps {
  textData: ItextInfo;
  line?: string;
}

// 서울시 지하철 실시간 도착정보 API
export interface ISubwayErrorInfo {
  code: string;
  developerMessage: string;
  link: string;
  message: string;
  status: number;
  total: number;
}
export interface ISubwayArriveInfo {
  arvlCd: string;
  arvlMsg2: string;
  arvlMsg3: string;
  barvlDt: string;
  beginRow: null;
  bstatnId: string;
  bstatnNm: string;
  btrainNo: string;
  btrainSttus: string;
  curPage: null;
  endRow: null;
  ordkey: string;
  pageRow: null;
  recptnDt: string;
  rowNum: number;
  selectedCount: number;
  statnFid: string;
  statnId: string;
  statnList: string;
  statnNm: string;
  statnTid: string;
  subwayHeading: null;
  subwayId: string;
  subwayList: string;
  subwayNm: null;
  totalCount: number;
  trainCo: null;
  trainLineNm: string;
  trnsitCo: string;
  updnLine: string;
}
export interface ISubwayProps {
  errorMessage: ISubwayErrorInfo;
  realtimeArrivalList: ISubwayArriveInfo[];
}
