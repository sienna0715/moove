import { useRecoilValue } from 'recoil';
import { v4 as uuidv4 } from 'uuid';
// components
import LinePath from './LinePath';
import LineLine from './LineLine';
import LineCircle from './LineCircle';
import LineRect from './LineRect';
import LineText from './LineText';
import { lineAtom } from '../recoil/atoms';

function Line4() {
  const lineDatas = useRecoilValue(lineAtom);

  return (
    <symbol id="line4SvgContainer">
      {lineDatas.line4?.path.map((pathData) => (
        <LinePath key={uuidv4()} pathData={pathData} line="line4" />
      ))}
      {lineDatas.line4?.line.map((lineData) => (
        <LineLine key={uuidv4()} lineData={lineData} line="line4" />
      ))}
      {lineDatas.line4?.circle.map((circleData) => (
        <LineCircle key={uuidv4()} circleData={circleData} line="line4" />
      ))}
      {lineDatas.line4?.rect.map((rectData) => (
        <LineRect key={uuidv4()} rectData={rectData} line="line4" />
      ))}
      {lineDatas.line4?.text.map((textData) => (
        <LineText key={uuidv4()} textData={textData} />
      ))}
    </symbol>
  );
}

export default Line4;
