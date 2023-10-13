import { useEffect, useRef, useState } from 'react';
import './App.scss';
import Main from './main/Main';
import Header from './header/Header';
import Modal from './main/Modal';

function App() {
  const [openModal, setOpenModal] = useState(false);
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setOpenModal(true);
  }, []);

  return (
    <div className="subway-wrap">
      {openModal && <Modal modalRef={modalRef} setOpenModal={setOpenModal} />}
      <Header />
      <div className="subway-container">
        <Main />
      </div>
    </div>
  );
}

export default App;
