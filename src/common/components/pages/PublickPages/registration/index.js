import { useState } from "react";
import { useDispatch } from "react-redux";
import { fetchRegist } from "../../../../../store/registration/actions";

export default function Registration() {

    const dispatch = useDispatch(); 

    const userData = {
        name: useFormInput(""),
        surname: useFormInput(""),
        tel: useFormInput(""),
        password: useFormInput(""),
        confPassword: useFormInput(""),
    }

    const setUserInfo = (e) => {
        e.preventDefault();
        dispatch(fetchRegist(userData, dispatch));
    }

    return (
        <div>
            <form action="" style={{ display: "grid", width: "200px" }}>
                <input type="text" required {...userData.name} />
                <input type="text" required {...userData.surname} />
                <input type="tel" required {...userData.tel} />
                <input type="password" required {...userData.password} />
                <input type="password" required {...userData.confPassword} />
                <button onClick={setUserInfo}>Submit</button>
            </form>
        </div>
    )
}

const useFormInput = (initValue) => {
    const [value, setValue] = useState(initValue);

    const handleChange = (e) => {
        setValue(e.target.value);
    }
    return {
        value,
        onChange: handleChange
    }
}