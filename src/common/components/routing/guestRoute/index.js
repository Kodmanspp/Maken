import { Navigate } from "react-router";
import { getToken } from "../../../../services/LocalStorage/token";

function GuestRoute({children}) {
    const token = getToken();
    if(token){
        console.log(token); 
        return <Navigate to="/workspace"/> 
    }
    return children; 
}

export default GuestRoute;