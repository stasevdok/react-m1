import Navbar from "../../components/Navbar/Navbar";
import './Main.scss';
import Modal from "../../hoc/Modal/Modal";
import Popup from "../../components/Popup/Popup";

export default function Index() {
  return (
    <>
      <Navbar />
      <div className="main">
        <div className='main-logo'></div>
        <span className="main-text">Медиа-сервис про&nbsp;стрит-арт.<br/>Готов к&nbsp;новым приключениям?</span>
      </div>
      <div className="first">
        <div className='fb-i1 imageblock shadow'></div>
        <span className="fb-t1 textblock shadow">Хочешь узнать что-то<br/>о граффити под мостом?</span>
        <span className="fb-t21 textblock2 shadow">Мы поможем!</span>
        <span className="fb-t31 textblock3 shadow">Узнай историю создания</span>
        <span className="fb-t32 textblock3 shadow">Посмотри другие<br/>работы автора</span>
        <span className="fb-t33 textblock3 shadow">Найди похожие<br/>арт-объекты</span>
        <span className="fb-t34 textblock3 shadow">Взгляни на&nbsp;то, как<br/>изменялся арт-объект<br/>с&nbsp;годами</span>
        <span className="fb-t35 textblock3 shadow">Почитай отзывы людей<br/>и&nbsp;оцени граффити сам</span>
      </div>
      <Modal id="id1">
        <Popup />
      </Modal>
    </>
  );
}
