import '../styles/StationResultStyle.scss';
import { MdArrowBackIos, MdArrowForwardIos } from 'react-icons/md';

function StationResult() {
  return (
    <div className="station-result-wrap">
      <div className="station-result-container">
        <div className="location">
          <div className="main-station">합정</div>
          <div className="sub-station">
            <span className="pre-station">
              <MdArrowBackIos />
              당산
            </span>
            <span className="next-station">
              홍대입구
              <MdArrowForwardIos />
            </span>
          </div>
        </div>
        <div className="arrive-information">
          <span className="subway">성수(외선행)</span>
          <span className="count">3분 21초</span>
        </div>
        <div className="exit-information">
          <span className="exit-title">5번 출구</span>
          <ul className="exit-list">
            <li>
              <span>홍익대학교 서울 캠퍼스</span>
              <span>10분</span>
            </li>
            <li>
              <span>홍익대학교 서울 캠퍼스</span>
              <span>10분</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default StationResult;
