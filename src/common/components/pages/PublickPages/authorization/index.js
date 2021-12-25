import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router";

import { fetchLogin } from "../../../../../store/authorization/actions";
import { useFormInput } from "../../../../hooks/customHooks";
import style from "./authorization.module.scss"; 


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
        if(user.token !== "" && user.token !== null){
            navigate("/workspace");
        }
    }, [user.token])

    return(
        <div className={style.container}>
            <h1>Авторизация</h1>
            <form className={style.form}>
                <input placeholder="Login"  className={`${style.login} ${style.input}`} type="text" {...login}/>
                <input placeholder="Password"  className={`${style.password} ${style.input}`} type="password" {...password}/>
                <button className={style.submit__btn} onClick={setData}>submit</button>
            </form>
        </div>
    )
}

