import { useDispatch } from "react-redux";
import {NavLink} from "react-router-dom";
import { getToken } from "../../../../../services/LocalStorage/token";
import { fetchUserData, setUserData } from "../../../../../store/userData/actions";

export default function NavBarAuth() {
    const dispatch = useDispatch();

    const ProfileReq = () =>{
       const token  = getToken();
       dispatch(fetchUserData(token)); 
    }
    return(
        <header className="header">
            <ul className="links" style={{display:"flex", justifyContent: "space-around"}}>
                <NavLink to="/workspace"><img src="./logo" alt="Logotip"/></NavLink>

                <input type="text" />
                
                <NavLink to="/workspace">Рабочее пространство</NavLink>
                <NavLink onClick={ProfileReq} to="/profile"><img src="" alt="Profile" /></NavLink>
            </ul>
        </header>
    )
}