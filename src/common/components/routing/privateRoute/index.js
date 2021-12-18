import { Navigate } from "react-router";
import { getToken } from "../../../../services/LocalStorage/token";

function PrivateRoute({children}) {
    const token = getToken();
    if(!token){
        return <Navigate to="/authorization"/> 
    }
    return children; 
}

export default PrivateRoute;