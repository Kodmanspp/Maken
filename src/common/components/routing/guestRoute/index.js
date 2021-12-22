import { useSelector } from "react-redux";
import { Navigate } from "react-router";


function GuestRoute({children}) {
    const token = useSelector(store => store.user.token);
    if(token !== "" && token !== null){ 
        return <Navigate to="/workspace"/> 
    }
    return children; 
}

export default GuestRoute;