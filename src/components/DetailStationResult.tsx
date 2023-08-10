import { useEffect } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import axios from 'axios';
// components
import '../styles/DetailStationResultStyle.scss';
import { MdArrowBackIos, MdArrowForwardIos } from 'react-icons/md';
import { currentStationAtom, stationInfoAtom } from '../recoil/atoms';
import { ISubwayProps } from '../interfaces/interfaces';

export default function DetailStationResult() {
  const currentStation = useRecoilValue(currentStationAtom);
  const [stationInfo, setStationInfo] = useRecoilState(stationInfoAtom);
  const subwayId: string = stationInfo[0]?.subwayId;
  console.log(stationInfo);

  useEffect(() => {
    axios
      .get<ISubwayProps>(`http://swopenAPI.seoul.go.kr/api/subway/6267466b6b616e7437394670434955/json/realtimeStationArrival/0/5/${currentStation}`)
      .then((res) => setStationInfo(res.data.realtimeArrivalList))
      .catch((err) => console.log(err));
  }, [currentStation, setStationInfo]);

  return (
    <div className="station-result-wrap">
      <div className="station-result-container">
        <div className="location">
          <div className={`main-station line${subwayId}`}>{currentStation}</div>
          <div className={`sub-station line${subwayId}`}>
            <span className="pre-station">
              <MdArrowBackIos />
              당산
            </span>
            <span className="next-station">
              홍대입구
              <MdArrowForwardIos />
            </span>
          </div>
        </div>
        <div className="arrive-information">
          <span className="subway">성수(외선행)</span>
          <span className="count">3분 21초</span>
        </div>
        <div className="exit-information">
          <span className="exit-title">5번 출구</span>
          <ul className="exit-list">
            <li>
              <span>홍익대학교 서울 캠퍼스</span>
              <span>10분</span>
            </li>
            <li>
              <span>홍익대학교 서울 캠퍼스</span>
              <span>10분</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
