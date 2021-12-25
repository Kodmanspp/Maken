import { useEffect } from "react";
import { useSelector, useDispatch  } from "react-redux";
import { useNavigate } from "react-router";

import { fetchRegist } from "../../../../../store/registration/actions";
import { useFormInput } from "../../../../hooks/customHooks";
import style from "../authorization/authorization.module.scss"; 

export default function Registration() {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const user = useSelector(state => state.user);

    const userData = {
        login: useFormInput(""),
        email: useFormInput(""),
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
        <div className={style.container}>
            <h1>Регистрация</h1>
            <form className={style.form} onSubmit={setUserInfo}>
                <input placeholder="Login" className={`${style.input}`} required type="text"  {...userData.login} />
                <input placeholder="Password" className={`${style.input}`} type="password" required {...userData.password} />
                <input placeholder="Repeat password" className={`${style.input}`} type="password" required />
                <input placeholder="Email" className={`${style.input}`} type="email" required  {...userData.email}/>
                <button className={`${style.submit__btn}`} type="submit">Submit</button>
            </form>
        </div>
    )
}
