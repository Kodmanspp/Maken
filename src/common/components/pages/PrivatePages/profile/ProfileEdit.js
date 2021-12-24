import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { fetchUserUpdate } from "../../../../../store/userData/actions";
import { useFormInput } from "../../../../hooks/customHooks";

export default function ProfileEdit({ props }) {

    const dispath = useDispatch(); 
    const login = useFormInput("");
    const user = useSelector(state => state.user); 
    const [loginError, setLoginError] = useState(false);

    function imageChange(e) {
        const newImage = e.target.files[0];
        var reader = new FileReader();
        reader.onloadend = function () {
            console.log(newImage); 
        }
        if (newImage && newImage.type.match('image.*')) {
            reader.readAsDataURL(newImage);
        }
    }
    console.log(user.token);
    function setLogin(){
        login.value !== "" ? dispath(fetchUserUpdate(user.token, login.value, dispath)) : setLoginError(true); 
    }
    return (
        <>
            <img src={props.image} alt="Avatar" width="20px" />
            <input type="file" onChange={imageChange} />
            <input type="text" placeholder={props.login} {...login}/>
            {loginError && <p>Введите валидные данные</p>}
            <button onClick={setLogin}>Save</button>
        </>
    )
}