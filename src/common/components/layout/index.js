import {Outlet} from "react-router-dom"; 
import { useSelector } from "react-redux";

import NavBarAuth from "./navigation/navbar/NavBarAuth";
import NavBarGuest from "./navigation/navbar/NavBarGuest";

import style from "./NavBar.module.scss"; 
import logo from "../../../assets/logo/Logo.png"; 


export default function Layout(){
    const token = useSelector(state=> state.user.token); 
    return(
        <>
            {token ? <NavBarAuth style={style} logo={logo}/> : <NavBarGuest style={style} logo={logo}/>}
            <Outlet/>
        </>
    )
}