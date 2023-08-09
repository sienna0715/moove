import DetailStationLineFilter from './DetailStationLineFilter';
import DetailStationSearch from './DetailStationSearch';

function DetailStationSearchWrap() {
  return (
    <div className="DetailStationSearchWrap">
      <DetailStationSearch />
      <DetailStationLineFilter />
    </div>
  );
}

export default DetailStationSearchWrap;
