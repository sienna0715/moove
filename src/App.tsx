import { TransformWrapper, TransformComponent } from 'react-zoom-pan-pinch';
// components
import './App.scss';
import DetailStation from './components/DetailStation';
import Line2 from './components/Line2';
import Line4 from './components/Line4';
import Line5 from './components/Line5';

function App() {
  return (
    <div className="subwayWrap">
      <DetailStation />
      <div className="subwayContainer">
        <TransformWrapper initialScale={1} minScale={1} maxScale={10}>
          <TransformComponent>
            <svg width={1500} height={1200} viewBox="0 -430 2500 2500">
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
  );
}

export default App;
