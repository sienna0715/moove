import { useEffect } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import axios from 'axios';
// components
import '../styles/DetailStationResultStyle.scss';
import { MdArrowBackIos, MdArrowForwardIos } from 'react-icons/md';
import { currentStationAtom, stationInfoAtom } from '../recoil/atoms';
import { ISubwayProps, ISubwayArriveInfo } from '../interfaces/interfaces';

export default function DetailStationResult() {
  const currentStation = useRecoilValue(currentStationAtom);
  const [stationInfo, setStationInfo] = useRecoilState<ISubwayArriveInfo[]>(stationInfoAtom);
  let subwayId = 'transfer';
  const line4 = ['별내별가람', '오남', '진접'];
  const line5 = ['미사', '하남풍산', '하남시청', '하남검단산', '개롱', '거여'];
  // api address
  const arrivalAddress = 'http://swopenAPI.seoul.go.kr/api/subway/6267466b6b616e7437394670434955/json/realtimeStationArrival/0/5/';
  // const tourAddress = 'http://openapi.seoul.go.kr:8088/4157654b4a616e743839737359467a/json/subwayTourInfo/1/5/';

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

  useEffect(() => {
    axios
      .get<ISubwayProps>(`${arrivalAddress}${currentStation}`)
      .then((res) => setStationInfo(res.data.realtimeArrivalList))
      .catch((err) => console.log(err));
    // axios
    //   .get(`${stationIdAddress}`)
    //   .then((res) => console.log(res.data.subwayTourInfo.row))
    //   .catch((err) => console.log(err));
  }, [currentStation, setStationInfo]);

  return (
    <div className="station-result-wrap">
      <div className="station-result-container">
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
