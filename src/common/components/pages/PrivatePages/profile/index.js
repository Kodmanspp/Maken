
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router";
import { clearUserData, fetchUserData } from "../../../../../store/userData/actions";
import { useFormInput } from "../../../../hooks/customHooks";


export const Profile = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    function Leave() {
        localStorage.removeItem("token");
        dispatch(clearUserData());
        navigate("/authorization");
    }

    useEffect( () => {
        dispatch(fetchUserData(user.token, dispatch));
    }, [])
    const user = useSelector(store => store.user.data);
    console.log(user);

    return (
        <div>
            <p>{user.login}</p>
            <p>{user.telegram}</p>
            <button onClick={Leave}>Leave</button>
        </div>
    )
}
