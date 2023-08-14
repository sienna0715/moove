import { useRecoilValue } from 'recoil';
import { v4 as uuidv4 } from 'uuid';
// components
import LineRect from './LineRect';
import LineText from './LineText';
import { lineAtom } from '../recoil/atoms';

function TransferStation() {
  const lineDatas = useRecoilValue(lineAtom);
  return (
    <symbol id="transferStationSvgContainer">
      {lineDatas?.transferStation?.rect.map((rectData) => (
        <LineRect key={uuidv4()} rectData={rectData} />
      ))}
      {lineDatas?.transferStation?.text.map((textData) => (
        <LineText key={uuidv4()} textData={textData} />
      ))}
    </symbol>
  );
}

export default TransferStation;
