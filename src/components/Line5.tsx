import { useRecoilValue } from 'recoil';
// components
import LineCircle from './LineCircle';
import LineLine from './LineLine';
import LinePath from './LinePath';
import LineRect from './LineRect';
import LineText from './LineText';
import lineAtom from '../recoil/atoms';

function Line5() {
  const lineDatas = useRecoilValue(lineAtom);

  return (
    <symbol id="line5SvgContainer">
      {lineDatas.line5?.path.map((pathData) => (
        <LinePath key={pathData.d} pathData={pathData} />
      ))}
      {lineDatas.line5?.line.map((lineData) => (
        <LineLine lineData={lineData} />
      ))}
      {lineDatas.line5?.circle.map((circleData) => (
        <LineCircle circleData={circleData} />
      ))}
      {lineDatas.line5?.rect.map((rectData) => (
        <LineRect key={rectData.stationName} rectData={rectData} />
      ))}
      {lineDatas.line5?.text.map((textData) => (
        <LineText key={textData.value} textData={textData} />
      ))}
    </symbol>
  );
}

export default Line5;
