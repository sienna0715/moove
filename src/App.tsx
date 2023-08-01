import './App.css';
import Line2 from './components/Line2';
import Line4 from './components/Line4';
import Line5 from './components/Line5';

function App() {
  return (
    <svg width={2700} height={1800}>
      <Line2 />
      <Line4 />
      <Line5 />
      <use xlinkHref="#line2SvgContainer" />
      <use xlinkHref="#line4SvgContainer" />
      <use xlinkHref="#line5SvgContainer" y={100} />
    </svg>
  );
}

export default App;
