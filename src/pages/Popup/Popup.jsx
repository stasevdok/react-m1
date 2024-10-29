import { useState } from "react";
import Modal from "../../hoc/Modal/Modal";
import Popup from "../../components/Popup/Popup";
import { Link } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import './Popup.scss';

export default function PopupPage() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Navbar />
      <div className="popup-page-container">
        <h1>Popup</h1>

        <button onClick={() => setIsOpen(true)}>Кнопка, чтобы открыть popup</button>

        <Modal shown={isOpen} onClose={() => setIsOpen(false)}>
          <Popup />
        </Modal>

        <Link to="./?popup=id1"><u>Ссылка, чтобы открыть popup</u></Link>
      </div>
      <Modal id="id1">
        <Popup />
      </Modal>
    </>
  );
}
