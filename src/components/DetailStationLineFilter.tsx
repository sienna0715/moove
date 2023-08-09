import DetailStationLineButton from './DetailStationLineButton';

function DetailStationLineFilter() {
  return (
    <div className="DetailStationLineFilter">
      <DetailStationLineButton value="2호선" line="line2" />
      <DetailStationLineButton value="4호선" line="line4" />
      <DetailStationLineButton value="5호선" line="line5" />
    </div>
  );
}

export default DetailStationLineFilter;
