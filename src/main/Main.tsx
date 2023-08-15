import '../styles/main.scss';
import DetailStation from './DetailStation';
import Map from './Map';

function Main() {
  return (
    <div className="main-wrap">
      <div className="main-contatiner">
        <DetailStation />
        <Map />
      </div>
    </div>
  );
}

export default Main;
