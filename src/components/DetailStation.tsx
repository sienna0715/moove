import '../styles/DetailStationStyle.scss';
import DetailStationLogo from './DetailStationLogo';
import DetailStationSearchWrap from './DetailStationSearchWrap';
import DetailStationResult from './DetailStationResult';

function DetailStation() {
  return (
    <div className="DetailStationWrap">
      <DetailStationLogo />
      <DetailStationSearchWrap />
      <DetailStationResult />
    </div>
  );
}

export default DetailStation;
