import { useState } from "react";
import { useDispatch } from "react-redux";
import { fetchLogin } from "../../../store/authorization/actions";
const AuthStates = () =>{

    const dispatch = useDispatch();

    const [login, setLogin] = useState("");
    const [password, setPassword] = useState("");

    const getLogin = (e) =>{
        setLogin(e.target.value); 
    }
    const getPassword = (e) =>{
        setPassword(e.target.value); 
    }

    const setData = () =>{
        dispatch(fetchLogin(login, password, dispatch)); 
    }
}


