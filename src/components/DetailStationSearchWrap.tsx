import DetailStationLineFilter from './DetailStationLineFilter';
import DetailStationSearch from './DetailStationSearch';
import '../styles/DetailStationSearch.scss';

function DetailStationSearchWrap() {
  return (
    <div className="DetailStationSearchWrap">
      <DetailStationSearch />
      <DetailStationLineFilter />
    </div>
  );
}

export default DetailStationSearchWrap;
