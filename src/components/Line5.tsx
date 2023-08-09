import { useRecoilValue } from 'recoil';
import { v4 as uuidv4 } from 'uuid';
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
        <LinePath key={uuidv4()} pathData={pathData} line="line5" />
      ))}
      {lineDatas.line5?.line.map((lineData) => (
        <LineLine key={uuidv4()} lineData={lineData} line="line5" />
      ))}
      {lineDatas.line5?.circle.map((circleData) => (
        <LineCircle key={uuidv4()} circleData={circleData} line="line5" />
      ))}
      {lineDatas.line5?.rect.map((rectData) => (
        <LineRect key={uuidv4()} rectData={rectData} line="line5" />
      ))}
      {lineDatas.line5?.text.map((textData) => (
        <LineText key={uuidv4()} textData={textData} />
      ))}
    </symbol>
  );
}

export default Line5;
