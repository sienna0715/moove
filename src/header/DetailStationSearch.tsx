import { useEffect, useState } from 'react';

import { useRecoilValue } from 'recoil';
import { currentStationAtom, stationNameAtom } from '../recoil/atoms';
import DetailStationSearchDropdown from './DetailStationSearchDropdown';
import DetailStationSearchInput from './DetailStationSearchInput';

function DetailStationSearch() {
  const [searchInput, setSearchInput] = useState('');
  const [stationNames, setStationNames] = useState<string[]>([]);
  const [filteredStationNames, setFilteredStationNames] = useState<string[]>(
    [],
  );
  const currentStation = useRecoilValue(currentStationAtom);
  const stationNameDatas = useRecoilValue(stationNameAtom);

  useEffect(() => {
    setSearchInput(currentStation);
    setStationNames([
      ...stationNameDatas.line2,
      ...stationNameDatas.line4,
      ...stationNameDatas.line5,
    ]);
    if (currentStation) {
      setFilteredStationNames(
        stationNames.filter((stationName) => stationName === currentStation),
      );
    } else {
      setFilteredStationNames([
        ...stationNameDatas.line2,
        ...stationNameDatas.line4,
        ...stationNameDatas.line5,
      ]);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [
    currentStation,
    stationNameDatas.line2,
    stationNameDatas.line4,
    stationNameDatas.line5,
  ]);

  return (
    <div>
      <DetailStationSearchDropdown
        filteredStationNames={filteredStationNames}
      />
      <DetailStationSearchInput
        searchInput={searchInput}
        stationNames={stationNames}
        setSearchInput={setSearchInput}
        setFilteredStationNames={setFilteredStationNames}
      />
    </div>
  );
}

export default DetailStationSearch;
