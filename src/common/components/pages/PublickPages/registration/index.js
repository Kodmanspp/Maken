import { useEffect } from "react";
import { useSelector, useDispatch  } from "react-redux";
import { useNavigate } from "react-router";

import { fetchRegist } from "../../../../../store/registration/actions";
import { useFormInput } from "../../../../hooks/customHooks";

export default function Registration() {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const user = useSelector(state => state.user);

    const userData = {
        login: useFormInput(""),
        tel: useFormInput(""),
        password: useFormInput(""),
        confPassword: useFormInput(""),
    }
    useEffect(() => {
        if(user.token){
            navigate("/workspace");
        }
    }, [user.token])

    const setUserInfo = (e) => {
        e.preventDefault();
        dispatch(fetchRegist(userData, dispatch)); 
    }

    return (
        <div>
            <form action="" style={{ display: "grid", width: "200px" }}>
                <input type="text" required {...userData.login} />
                <input type="password" required {...userData.password} />
                <input type="password" required {...userData.confPassword} />
                <input type="tel" required {...userData.tel} />
                <button onClick={setUserInfo}>Submit</button>
            </form>
        </div>
    )
}
