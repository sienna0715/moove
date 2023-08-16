import { useRecoilValue, useSetRecoilState } from 'recoil';
import { useEffect, useState } from 'react';
// components
import { lineSelectAtom } from '../recoil/atoms';
import { IDetailStationLineButtonProps } from '../interfaces/interfaces';

function DetailStationLineButton({
  value,
  line,
}: IDetailStationLineButtonProps) {
  const [isLine, setIsLine] = useState('true');
  const setLineSelect = useSetRecoilState(lineSelectAtom);
  const lineSelectValue = useRecoilValue(lineSelectAtom);

  useEffect(() => {
    if (lineSelectValue === line || lineSelectValue === '') {
      setIsLine('true');
    } else {
      setIsLine('false');
    }
  }, [line, lineSelectValue]);

  const lineButtonClickHandler = () => {
    if (lineSelectValue === line) {
      setLineSelect('');
    } else {
      setLineSelect(line);
    }
  };

  return (
    <button
      type="button"
      className={`DetailStationLineButton ${line} ${isLine}`}
      onClick={lineButtonClickHandler}
    >
      {value}
    </button>
  );
}

DetailStationLineButton.defalutProps = {
  line: 'line2',
  isLine: 'true',
};

export default DetailStationLineButton;
