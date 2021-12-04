import NavBar from "./navigation/navbar/NavBar";
import {Outlet} from "react-router-dom"; 
export default function Layout(){
    return(
        <>
            <NavBar/>
            <Outlet/>
        </>
    )
}