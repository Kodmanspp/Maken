import {NavLink} from "react-router-dom";

export default function NavBarGuest() {
    return(
        <header className="header">
            <ul className="links" style={{display:"flex", justifyContent: "space-around"}}>
                <NavLink to="/"><img src="./logo" alt="Logotip"/></NavLink>
                <NavLink to="/registration">Регистрация</NavLink>
                <NavLink to="/authorization">Войти</NavLink>
            </ul>
        </header>
    )
}