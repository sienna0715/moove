import { useRecoilValue } from 'recoil';
// components
import LinePath from './LinePath';
import LineLine from './LineLine';
import LineCircle from './LineCircle';
import LineRect from './LineRect';
import LineText from './LineText';
import lineAtom from '../recoil/atoms';

function Line4() {
  const lineDatas = useRecoilValue(lineAtom);

  return (
    <symbol id="line4SvgContainer">
      {lineDatas.line4?.path.map((pathData) => (
        <LinePath pathData={pathData} line="line4" />
      ))}
      {lineDatas.line4?.line.map((lineData) => (
        <LineLine lineData={lineData} line="line4" />
      ))}
      {lineDatas.line4?.circle.map((circleData) => (
        <LineCircle circleData={circleData} line="line4" />
      ))}
      {lineDatas.line4?.rect.map((rectData) => (
        <LineRect rectData={rectData} line="line4" />
      ))}
      {lineDatas.line4?.text.map((textData) => (
        <LineText textData={textData} />
      ))}
    </symbol>
  );
}

export default Line4;
