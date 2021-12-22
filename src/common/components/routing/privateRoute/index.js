import { useSelector } from "react-redux";
import { Navigate } from "react-router";
import { localGetItem } from "../../../../services/LocalStorage/localStorage";


function PrivateRoute({children}) {
    const token = useSelector(store => store.user.token);
    if(token === "" || token === null){
        return <Navigate to="/authorization"/> 
    }
    return children; 
}

export default PrivateRoute;