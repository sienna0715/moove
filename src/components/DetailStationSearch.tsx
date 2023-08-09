import { FaSearch } from 'react-icons/fa';

function DetailStationSearch() {
  return (
    <div className="DetailStationSearch">
      <input className="DetailStationSearchInput" placeholder="역명 검색" />
      <FaSearch className="DetailStationSearchIcon" size="24" />
    </div>
  );
}

export default DetailStationSearch;
