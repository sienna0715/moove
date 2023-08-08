import axios from 'axios';
import { useEffect, useState } from 'react';
// components
import LinePath from './LinePath';
import LineLine from './LineLine';
import LineCircle from './LineCircle';
import LineRect from './LineRect';
import LineText from './LineText';

interface IDataInfo {
  line2: ILine4DatasInfo;
  line4: ILine4DatasInfo;
  line5: ILine4DatasInfo;
}

interface ILine4DatasInfo {
  path: IPathInfo[];
  line: ILineInfo[];
  circle: ICircleInfo[];
  rect: IRectInfo[];
  text: ItextInfo[];
}
interface IPathInfo {
  d: string;
}
interface ILineInfo {
  x1: number;
  y1: number;
  x2: number;
  y2: number;
}
interface ICircleInfo {
  stationName: string;
  cx: number;
  cy: number;
}
interface IRectInfo {
  stationName: string;
  width: number;
  height: number;
  x: number;
  y: number;
}
interface ItextInfo {
  value: string;
  x: number;
  y: number;
  dx: number;
  dy: number;
  tdx?: number;
  tdy?: number;
  tValue?: string;
  tValue1?: string;
  fill: string;
}

function Line4() {
  const [line4Datas, setLin4Datas] = useState<ILine4DatasInfo>();
  // const circleRef = useRef<SVGCircleElement>(null);

  useEffect(() => {
    //   const svg = circleRef.current;
    //   if (svg) {
    //     svg.addEventListener('click', () => {
    //       console.log('ok');
    //     });
    //   }
    const fetchData = async () => {
      try {
        const res = await axios.get<IDataInfo>('/data/line.json');
        setLin4Datas(res.data.line4);
      } catch (err) {
        console.log(Error, err);
      }
    };
    fetchData();
  }, []);
  return (
    <symbol id="line4SvgContainer">
      {line4Datas?.path.map((pathData) => (
        <LinePath pathData={pathData} />
      ))}
      {line4Datas?.line.map((lineData) => (
        <LineLine lineData={lineData} />
      ))}
      {line4Datas?.circle.map((circleData) => (
        <LineCircle circleData={circleData} />
      ))}
      {line4Datas?.rect.map((rectData) => (
        <LineRect rectData={rectData} />
      ))}
      {line4Datas?.text.map((textData) => (
        <LineText textData={textData} />
      ))}
    </symbol>
  );
}

export default Line4;
