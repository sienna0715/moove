import '../styles/DetailStation.scss';
import DetailStationLogo from './DetailStationLogo';
import DetailStationSearchWrap from './DetailStationSearchWrap';
import StationResult from './StationResult';

function DetailStation() {
  return (
    <div className="DetailStationWrap">
      <DetailStationLogo />
      <DetailStationSearchWrap />
      <StationResult />
    </div>
  );
}

export default DetailStation;
