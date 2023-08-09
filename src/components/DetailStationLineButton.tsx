interface IDetailStationLineButtonProps {
  value: string;
  line: string;
}

function DetailStationLineButton({
  value,
  line,
}: IDetailStationLineButtonProps) {
  return (
    <button type="button" className={`DetailStationLineButton${line}`}>
      {value}
    </button>
  );
}

export default DetailStationLineButton;
