import { useState } from "react";
import { useDispatch } from "react-redux";
import { useFormInput } from "../../../../hooks/customHooks";

export default function ProfileEdit({ props }) {
    const dispath = useDispatch(); 
    const login = useFormInput("");
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
    function setLogin(){
        login.value !== "" ? console.log("dis") : setLoginError(true); 
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