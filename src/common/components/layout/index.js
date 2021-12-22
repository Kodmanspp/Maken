import NavBarGuest from "./navigation/navbar/NavBarGuest";
import {Outlet} from "react-router-dom"; 
import NavBarAuth from "./navigation/navbar/NavBarAuth";
import { useSelector } from "react-redux";

export default function Layout(){
    const token = useSelector(state=> state.user.token); 
    return(
        <>
            {token ? <NavBarAuth/> : <NavBarGuest/>}
            <Outlet/>
        </>
    )
}