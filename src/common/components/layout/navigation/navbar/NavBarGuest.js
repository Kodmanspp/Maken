import {NavLink} from "react-router-dom";

export default function NavBarGuest({style, logo}) {
    
    return(
        <header className={`${style.header} ${style.header__guest}`}>
            <ul className={`${style.list} ${style.list__guest}`} >
                <NavLink to="/"><img className={`${style.guest} ${style.guest}`}  src={logo} alt="Logotip"/></NavLink>
                <NavLink to="/registration" className={`${style.registration} ${style.link}`}>Регистрация</NavLink>
                <NavLink to="/authorization" className={`${style.authorization} ${style.link}`}>Войти</NavLink>
            </ul>
        </header>
    )
}