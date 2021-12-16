import { Navigate } from "react-router";
import { getToken } from "../../../../../services/LocalStorage/token"

export default function Home() {
    const token = getToken();

    const LeaveHandle = () => {
        localStorage.removeItem("token");
        <Navigate to="/login"/>
    }
    return (
        <>
            {token ? <p>login</p>: <p>not Login</p>}
            <button onClick={LeaveHandle}>Leave</button>
        </>
    )
}