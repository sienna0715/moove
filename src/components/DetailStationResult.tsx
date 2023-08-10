import { useEffect, useState } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import axios from 'axios';
// components
import '../styles/DetailStationResultStyle.scss';
import { MdArrowBackIos, MdArrowForwardIos } from 'react-icons/md';
import { currentAtom, stationInfoAtom } from '../recoil/atoms';

export default function DetailStationResult() {
  const [color, setColor] = useState<string>('#3DB44B');
  const currentStation = useRecoilValue(currentAtom);
  const [stationInfo, setStationInfo] = useRecoilState(stationInfoAtom);

  // if (stationInfo.subwayId === '1002') {
  //   setColor('#3DB44B');
  // } else if (stationInfo.subwayId === '1004') {
  //   setColor('#08A5E3');
  // } else if (stationInfo.subwayId === '1005') {
  //   setColor('#8300EB');
  // }

  useEffect(() => {
    axios
      .get(
        `http://swopenAPI.seoul.go.kr/api/subway/6267466b6b616e7437394670434955/xml/realtimeStationArrival/0/5/${currentStation}`,
      )
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));
  }, [currentStation, setStationInfo]);
  return (
    <div className="station-result-wrap">
      <div className="station-result-container">
        <div className="location">
          <div className="main-station">{currentStation}</div>
          <div className="sub-station">
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
