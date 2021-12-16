import axios from "axios";
import { setToken } from "../../services/LocalStorage/token";
import { LOGIN_FAILED, LOGIN_LOADING, LOGIN_SUCCESS } from "./constants";

export const loginLoading = () =>{
    return{
        type: LOGIN_LOADING,
    }
}
export const loginSucces = (token) =>{
    return{
        type: LOGIN_SUCCESS,
        payload: token,
    }
}
export const loginError = (error) =>{
    return{
        type: LOGIN_FAILED,
        payload: error, 
    }
}
export const fetchLogin = (login, password) => (dispatch) => {
    dispatch(loginLoading);
    axios.post("http://localhost:1717/login",{
        username: login,
        password: password,
    })
    .then(token => {
        dispatch(loginSucces(token.data.token));
        setToken(token.data.token); 
    })
    .catch((error) => {
        dispatch(loginError(error.message));
    })
}