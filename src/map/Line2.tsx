import { useRecoilValue } from 'recoil';
import { v4 as uuidv4 } from 'uuid';
// components
import LinePath from './LinePath';
import LineLine from './LineLine';
import LineCircle from './LineCircle';
import LineText from './LineText';
import { lineAtom } from '../recoil/atoms';

function Line2() {
  const lineDatas = useRecoilValue(lineAtom);

  return (
    <symbol id="line2SvgContainer">
      {lineDatas.line2?.path.map((pathData) => (
        <LinePath key={uuidv4()} pathData={pathData} line="line2" />
      ))}
      {lineDatas.line2?.line.map((lineData) => (
        <LineLine key={uuidv4()} lineData={lineData} line="line2" />
      ))}
      {lineDatas.line2?.circle.map((circleData) => (
        <LineCircle key={uuidv4()} circleData={circleData} line="line2" />
      ))}
      {lineDatas.line2?.text.map((textData) => (
        <LineText key={uuidv4()} textData={textData} line="line2" />
      ))}
    </symbol>
  );
}

export default Line2;
