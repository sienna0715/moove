import { useEffect, useState } from 'react';
// components
import LinePath from './LinePath';
import LineLine from './LineLine';
import LineCircle from './LineCircle';
import LineRect from './LineRect';
import LineText from './LineText';
import { ILineDatasInfo } from '../interfaces/interfaces';

function Line4() {
  const [line4Datas, setLin4Datas] = useState<ILineDatasInfo>();
  // const circleRef = useRef<SVGCircleElement>(null);

  useEffect(() => {
    //   const svg = circleRef.current;
    //   if (svg) {
    //     svg.addEventListener('click', () => {
    //       console.log('ok');
    //     });
    //   }
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
