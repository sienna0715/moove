import { TransformWrapper, TransformComponent } from 'react-zoom-pan-pinch';
// components
import '../styles/detail.scss';
import DetailStationResult from './DetailStationResult';
import Line2 from '../map/Line2';
import Line4 from '../map/Line4';
import Line5 from '../map/Line5';

function DetailStation() {
  return (
    <div className="detail-station-wrap">
      <div className="detail-station-contatiner">
        <DetailStationResult />
        <div className="subway-map-border">
          <TransformWrapper initialScale={1} minScale={1} maxScale={10}>
            <TransformComponent>
              <svg
                className="subway-map"
                width="100%"
                height="80vh"
                viewBox="0 0 2500 1700"
              >
                <Line2 />
                <Line4 />
                <Line5 />
                <use xlinkHref="#line2SvgContainer" />
                <use xlinkHref="#line4SvgContainer" />
                <use xlinkHref="#line5SvgContainer" y={100} />
              </svg>
            </TransformComponent>
          </TransformWrapper>
        </div>
      </div>
    </div>
  );
}

export default DetailStation;
