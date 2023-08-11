import '../styles/DetailStationStyle.scss';
import DetailStationLogo from './DetailStationLogo';
import DetailStationSearchWrap from './DetailStationSearchWrap';
import DetailStationResult from './DetailStationResult';

function DetailStation() {
  return (
    <div className="detail-station-wrap">
      <div className="detail-station-contatiner">
        <DetailStationLogo />
        <DetailStationSearchWrap />
        <DetailStationResult />
      </div>
    </div>
  );
}

export default DetailStation;
