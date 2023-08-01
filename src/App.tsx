import './App.css';
import Line2 from './components/Line2';
import Line4 from './components/Line4';
import Line5 from './components/Line5';

function App() {
  return (
    <svg width={3000} height={1200}>
      <Line2 />
      <Line4 />
      <use xlinkHref="#line2SvgContainer" x={388} y={-50} />
      <use xlinkHref="#line4SvgContainer" x={388} y={-50} />
      <Line5 />
    </svg>
  );
}

export default App;
