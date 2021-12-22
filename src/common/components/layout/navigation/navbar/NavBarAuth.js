import { useSelector } from "react-redux";
import {NavLink} from "react-router-dom";

export default function NavBarAuth() {
    const avatar = useSelector(store => store.user.data.image); 
    return(
        <header className="header">
            <ul className="links" style={{display:"flex", justifyContent: "space-around"}}>
                <NavLink to="/workspace"><img src="./logo" alt="Logotip"/></NavLink>

                <input type="text" />
                
                <NavLink to="/workspace">Рабочее пространство</NavLink>
                <NavLink to="/profile"><img style={{"width": "40px"}} src={avatar} alt="Profile" /></NavLink>
            </ul>
        </header>
    )
}