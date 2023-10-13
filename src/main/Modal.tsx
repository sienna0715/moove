import '../styles/modal.scss';

interface IModalProps {
  modalRef: React.RefObject<HTMLDivElement>;
  setOpenModal: (state: boolean) => void;
}

function Modal({ modalRef, setOpenModal }: IModalProps) {
  return (
    <div className="modal-wrap">
      <div className="modal-container">
        <div className="modal-header">
          <div className="circle-wrap">
            <div className="circle red" />
            <div className="circle yellow" />
            <div className="circle green" />
          </div>
        </div>
        <div className="modal-box" ref={modalRef}>
          <div className="modal-text">
            서비스 이용 전에
            {' '}
            <a href="https://cors-anywhere.herokuapp.com/">
              https://cors-anywhere.herokuapp.com/
            </a>
            {' '}
            해당 주소에 들어가셔서 Request 버튼을 클릭해주세요!
          </div>
          <button
            type="button"
            className="modal-button"
            onClick={() => setOpenModal(false)}
          >
            확인
          </button>
        </div>
      </div>
    </div>
  );
}

export default Modal;
