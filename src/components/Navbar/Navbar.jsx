import './Navbar.scss';
import { NavLink } from "react-router-dom";

export default function Navbar() {
    return (
        <div className="tabs">
            <div className="tab"><NavLink exact to="/" activeClassName="active">Главная</NavLink></div>
            <div className="tab"><NavLink to="/popup" activeClassName="active">Popup</NavLink></div>
            <div className="tab"><NavLink to="/about" activeClassName="active">О проекте</NavLink></div>
            <div className="tab"><NavLink to="/photos" activeClassName="active">Фотографии</NavLink></div>
        </div>
    );
}
