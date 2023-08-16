import { useRecoilValue, useSetRecoilState } from 'recoil';
import { isDropdownAtom, currentStationAtom } from '../recoil/atoms';
import { IDetailStationSearchDropdownProps } from '../interfaces/interfaces';

function DetailStationSearchDropdown({
  filteredStationNames,
}: IDetailStationSearchDropdownProps) {
  const isDropdown = useRecoilValue(isDropdownAtom);
  const setCurrentStation = useSetRecoilState(currentStationAtom);
  const setIsDropdown = useSetRecoilState(isDropdownAtom);

  const searchDropdownClickHandler = (stationName: string) => {
    setCurrentStation(stationName);
    setIsDropdown(false);
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
    </div>
  );
}

export default DetailStationSearchDropdown;
