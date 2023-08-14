import { useRecoilValue } from 'recoil';
// components
import { MdArrowBackIos, MdArrowForwardIos } from 'react-icons/md';
import { currentStationAtom, stationInfoAtom } from '../recoil/atoms';
import { ISubwayArriveInfo } from '../interfaces/interfaces';

function DetailStationLocation() {
  const currentStation = useRecoilValue(currentStationAtom);
  const stationInfo = useRecoilValue<ISubwayArriveInfo[]>(stationInfoAtom);
  const line4 = ['별내별가람', '오남', '진접'];
  const line5 = ['미사', '하남풍산', '하남시청', '하남검단산', '개롱', '거여'];
  let subwayId = 'transfer';

  if (stationInfo) {
    if (Number(stationInfo[0]?.trnsitCo) > 1) {
      subwayId = 'transfer';
    } else if (Number(stationInfo[0]?.trnsitCo) === 1) {
      if (
        stationInfo[0]?.subwayList.split(',').includes('1002')
        || stationInfo[0]?.subwayId === '1002'
      ) {
        subwayId = '1002';
      } else if (
        stationInfo[0]?.subwayList.split(',').includes('1004')
        || line4.includes(currentStation)
        || stationInfo[0]?.subwayId === '1004'
      ) {
        subwayId = '1004';
      } else if (
        stationInfo[0]?.subwayList.split(',').includes('1005')
        || line5.includes(currentStation)
        || stationInfo[0]?.subwayId === '1005'
        || stationInfo[0]?.subwayId === '1063'
      ) {
        subwayId = '1005';
      }
    }
  } else if (stationInfo === undefined) {
    subwayId = 'transfer';
  }
  return (
    <div className="location">
      <div className={`main-station line${subwayId}`}>{currentStation}</div>
      <div className={`sub-station line${subwayId}`}>
        <span className="pre-station">
          <MdArrowBackIos />
        </span>
        <span className="next-station">
          <MdArrowForwardIos />
        </span>
      </div>
    </div>
  );
}

export default DetailStationLocation;
