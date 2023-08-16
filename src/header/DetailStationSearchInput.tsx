import { FaSearch } from 'react-icons/fa';
import { useSetRecoilState } from 'recoil';
import { currentStationAtom, isDropdownAtom } from '../recoil/atoms';
import { IDetailStationSearchInputProps } from '../interfaces/interfaces';

function DetailStationSearchInput({
  searchInput,
  stationNames,
  setSearchInput,
  setFilteredStationNames,
}: IDetailStationSearchInputProps) {
  const setIsDropdown = useSetRecoilState(isDropdownAtom);
  const setCurrentStation = useSetRecoilState(currentStationAtom);

  const searchInputChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchInput(e.target.value);
    if (e.target.value.replace(/(\s*)/g, '') === '') {
      setFilteredStationNames(stationNames);
    } else if (e.target.value.replace(/(\s*)/g, '') !== '') {
      setFilteredStationNames(
        stationNames.filter((stationName) =>
          stationName.includes(e.target.value),
        ),
      );
    }
  };

  const searchClickHandler = () => {
    setCurrentStation(searchInput.replace(/(\s*)/g, ''));
  };

  const inputOnFocusHandler = () => {
    setIsDropdown(true);
  };

  return (
    <div className="DetailStationSearch">
      <input
        className="DetailStationSearchInput"
        placeholder="역명 검색"
        onChange={searchInputChangeHandler}
        value={searchInput}
        onFocus={inputOnFocusHandler}
      />
      <FaSearch
        className="DetailStationSearchIcon"
        size="24"
        onClick={searchClickHandler}
      />
    </div>
  );
}

export default DetailStationSearchInput;
