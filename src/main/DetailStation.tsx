import { useEffect } from 'react';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import axios from 'axios';
// components
import '../styles/detail_result_style.scss';
import { currentStationAtom, stationInfoAtom } from '../recoil/atoms';
import { ISubwayProps, ISubwayArriveInfo } from '../interfaces/interfaces';
import DetailStationLocation from './DetailStationLocation';
import DetailStationInfo from './DetailStationInfo';
import DetailStationExit from './DetailStationExit';

export default function DetailStation() {
  const currentStation = useRecoilValue(currentStationAtom);
  const setStationInfo = useSetRecoilState<ISubwayArriveInfo[]>(stationInfoAtom);

  // api address
  const arrivalAddress = 'http://swopenAPI.seoul.go.kr/api/subway/6267466b6b616e7437394670434955/json/realtimeStationArrival/0/5/';

  useEffect(() => {
    axios
      .get<ISubwayProps>(`${arrivalAddress}${currentStation}`)
      .then((res) => setStationInfo(res.data.realtimeArrivalList))
      .catch((err) => console.log(err));
  }, [currentStation, setStationInfo]);

  return (
    <div className="station-result-wrap">
      <div className="station-result-container">
        <DetailStationLocation />
        <DetailStationInfo />
        <DetailStationExit />
      </div>
    </div>
  );
}