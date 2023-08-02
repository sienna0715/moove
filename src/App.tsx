import { TransformWrapper, TransformComponent } from 'react-zoom-pan-pinch';
// components
import './App.css';
import Line2 from './components/Line2';
import Line4 from './components/Line4';
import Line5 from './components/Line5';

function App() {
  return (
    <TransformWrapper initialScale={1} minScale={1} maxScale={10}>
      <TransformComponent>
        <svg width={2700} height={1800}>
          <Line2 />
          <Line4 />
          <Line5 />
          <use xlinkHref="#line2SvgContainer" />
          <use xlinkHref="#line4SvgContainer" />
          <use xlinkHref="#line5SvgContainer" y={100} />
        </svg>
      </TransformComponent>
    </TransformWrapper>
  );
}

export default App;
