import React, { useEffect, useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import { useRecoilState, useRecoilValue } from 'recoil';
import {
  currentStationAtom,
  stationNameAtom,
  isDropdownAtom,
} from '../recoil/atoms';

function DetailStationSearch() {
  const [searchInput, setSearchInput] = useState('');
  const [stationNames, setStationNames] = useState<string[]>([]);
  const [filteredStationNames, setFilteredStationNames] = useState<string[]>(
    [],
  );
  const [currentStation, setCurrentStation] =
    useRecoilState(currentStationAtom);
  const [isDropdown, setIsDropdown] = useRecoilState(isDropdownAtom);
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
      setFilteredStationNames(stationNames);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [
    currentStation,
    stationNameDatas.line2,
    stationNameDatas.line4,
    stationNameDatas.line5,
  ]);
  const searchInputChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchInput(() => e.target.value);
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

  const searchDropdownClickHandler = (stationName: string) => {
    setCurrentStation(stationName);
    setIsDropdown(false);
  };

  const inputOnFocusHandler = () => {
    setIsDropdown(true);
  };

  const dropdownCloseHandler = () => {
    setIsDropdown(false);
  };

  return (
    <div>
      {isDropdown ? (
        <div className="DetailStationSearchDropdown">
          <div className="DetailStationSerchDropdownSpace" />
          <div className="DetailStationSearchDropdownWapper">
            {filteredStationNames.map((filteredStationName) => (
              <div
                role="presentation"
                onClick={() => {
                  searchDropdownClickHandler(filteredStationName);
                }}
              >
                {filteredStationName}
              </div>
            ))}
          </div>
          <button
            className="DetailStationSearchDropdownButton"
            type="button"
            onClick={dropdownCloseHandler}
          >
            x
          </button>
        </div>
      ) : null}
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
    </div>
  );
}

export default DetailStationSearch;
