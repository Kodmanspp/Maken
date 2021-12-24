import logo from "../../../../../assets/logo/Logo.png";

import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

export default function NavBarAuth({ style, logo }) {
    const avatar = useSelector(store => store.user.data.image);
    return (
        <header className={`${style.header} ${style.header__auth}`}>
            <ul className={`${style.list} ${style.list__auth}`}>
                <div>
                    <NavLink to="/workspace">
                        <img className={`${style.logo} ${style.logo__auth}`} src={logo} alt="Logotip" />
                    </NavLink>

                    <input className={`${style.search}`} />
                </div>
                <div>
                    <NavLink to="/workspace" className={`${style.workspace}`}>Рабочее пространство</NavLink>

                    <NavLink to="/profile">
                        <img className={`${style.profile}`} src={avatar} alt="Profile" />
                    </NavLink>
                </div>
            </ul>
        </header>
    )
}