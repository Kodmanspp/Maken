import { useEffect, useState } from "react";
import { useSelector, useDispatch  } from "react-redux";
import { useNavigate } from "react-router";
import PhoneInput from 'react-phone-number-input';

import { fetchRegist } from "../../../../../store/registration/actions";
import { useFormInput } from "../../../../hooks/customHooks";
import 'react-phone-number-input/style.css';

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
        <div>
            <form action="" onSubmit={setUserInfo} style={{ display: "grid", width: "200px" }}>
                <input required type="text"  {...userData.login} />
                <input type="password" required {...userData.password} />
                <input type="password" required />
                <input type="email" required  {...userData.email}/>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}
