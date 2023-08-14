import './App.scss';
import Main from './main/Main';
import Header from './header/Header';

function App() {
  return (
    <div className="subway-wrap">
      <Header />
      <div className="subway-container">
        <Main />
      </div>
    </div>
  );
}

export default App;
