import '../styles/header.scss';
import Logo from './Logo';
import DetailStationSearchWrap from './DetailStationSearchWrap';

function Header() {
  return (
    <div className="header-wrap">
      <div className="header-container">
        <div className="logo">
          <Logo />
        </div>
        <DetailStationSearchWrap />
      </div>
    </div>
  );
}

export default Header;
