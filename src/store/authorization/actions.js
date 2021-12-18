import axios from "axios";
import { setToken } from "../../services/LocalStorage/token";
import { fetchUserData, setTokenStore } from "../userData/actions";
import { LOGIN_FAILED, LOGIN_LOADING, LOGIN_SUCCESS } from "./constants";

export const loginLoading = () => {
    return {
        type: LOGIN_LOADING,
    }
}
export const loginSucces = () => {
    return {
        type: LOGIN_SUCCESS,
    }
}
export const loginError = (error) => {
    return {
        type: LOGIN_FAILED,
        payload: error,
    }
}
export const fetchLogin = (login, password) => (dispatch) => {
    dispatch(loginLoading());
    axios.post("https://maken-task.herokuapp.com/api/user/sign-up", {
        login: login,
        password: password,
    })
        .then(token => {
            dispatch(loginSucces(token.data.value));
            dispatch(setTokenStore(token.data.value)); 
            setToken(token.data.value); 
        })
        .catch((error) => {
            dispatch(loginError(error.message));
        })
}