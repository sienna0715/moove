import { useRecoilValue } from 'recoil';
// components
import { stationInfoAtom } from '../recoil/atoms';
import { ISubwayArriveInfo } from '../interfaces/interfaces';

function DetailStationInfo() {
  const stationInfo = useRecoilValue<ISubwayArriveInfo[]>(stationInfoAtom);
  return (
    <div>
      {stationInfo?.map((arrive) => (
        <div className="arrive-information">
          <div>
            <span className="subway">{arrive.trainLineNm.split('-')[0]}</span>
            <span className="subway">
              &#40;
              {arrive.updnLine}
              &#41;
            </span>
          </div>
          <span className="count">{arrive.arvlMsg2}</span>
        </div>
      ))}
    </div>
  );
}

export default DetailStationInfo;
