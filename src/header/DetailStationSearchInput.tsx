import { FaSearch } from 'react-icons/fa';
import { useRecoilState, useSetRecoilState } from 'recoil';
import { currentStationAtom, isDropdownAtom } from '../recoil/atoms';
import { IDetailStationSearchInputProps } from '../interfaces/interfaces';

function DetailStationSearchInput({
  searchInput,
  stationNames,
  setSearchInput,
  setFilteredStationNames,
}: IDetailStationSearchInputProps) {
  const [isDropdown, setIsDropdown] = useRecoilState(isDropdownAtom);
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
    <div className={`DetailStationSearch drop-${String(isDropdown)}`}>
      <FaSearch
        className="DetailStationSearchIcon"
        size="20"
        onClick={searchClickHandler}
      />
      <input
        className="DetailStationSearchInput"
        placeholder="역명 검색"
        onChange={searchInputChangeHandler}
        value={searchInput}
        onFocus={inputOnFocusHandler}
      />
    </div>
  );
}

export default DetailStationSearchInput;
