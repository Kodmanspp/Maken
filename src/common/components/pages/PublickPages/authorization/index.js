import { useState } from "react";
import { useDispatch } from "react-redux";
import { fetchLogin } from "../../../../../store/authorization/actions";

export default function Authorization(){

    const dispatch = useDispatch();

    const [login, setLogin] = useState("");
    const [password, setPassword] = useState("");

    const getLogin = (e) =>{
        setLogin(e.target.value); 
    }
    const getPassword = (e) =>{
        setPassword(e.target.value); 
    }

    const setData = (e) =>{
        e.preventDefault(); 
        dispatch(fetchLogin(login, password, dispatch)); 
    }

    return(
        <div>
            <form action="" style={{display: "grid", width: "200px"}}>
                <input type="text" onChange={getLogin}/>
                <input type="password" onChange={getPassword}/>
                <button onClick={setData}>submit</button>
            </form>
        </div>
    )
}