import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { getToken } from "../../../../../services/LocalStorage/token";

import { fetchLogin } from "../../../../../store/authorization/actions";
import { useFormInput } from "../../../../hooks/customHooks";


export default function Authorization(){

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const user = useSelector(state => state.user);
    const login = useFormInput("");
    const password = useFormInput("");

    const setData = (e) =>{
        e.preventDefault(); 
        dispatch(fetchLogin(login.value, password.value, dispatch));
    }
    useEffect(() => {
        console.log(user.token);
        if(user.token!== "" && user.token!== null){
            navigate("/workspace");
        }

    }, [user.token])

    return(
        <div>
            <form action="" style={{display: "grid", width: "200px"}}>
                <input type="text" {...login}/>
                <input type="password" {...password}/>
                <button onClick={setData}>submit</button>
            </form>
        </div>
    )
}

