import './App.scss';
import DetailStation from './detail/DetailStation';
import Header from './header/Header';

function App() {
  return (
    <div className="subway-wrap">
      <Header />
      <div className="subway-container">
        <DetailStation />
      </div>
    </div>
  );
}

export default App;
