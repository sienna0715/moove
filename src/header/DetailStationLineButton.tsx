import { useRecoilState } from 'recoil';
import { useEffect, useState } from 'react';
// components
import { lineSelectAtom } from '../recoil/atoms';
import { IDetailStationLineButtonProps } from '../interfaces/interfaces';

function DetailStationLineButton({
  value,
  line,
}: IDetailStationLineButtonProps) {
  const [isLine, setIsLine] = useState('true');
  const [lineSelect, setLineSelect] = useRecoilState(lineSelectAtom);

  useEffect(() => {
    if (lineSelect === line || lineSelect === '') {
      setIsLine('true');
    } else {
      setIsLine('false');
    }
  }, [line, lineSelect]);

  const lineButtonClickHandler = () => {
    if (lineSelect === line) {
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
