import axios from "axios";
import { setToken } from "../../services/LocalStorage/token";
import { setTokenStore } from "../userData/actions";
import { REGIST_FAILED, REGIST_LOADING, REGIST_SUCCES } from "./constants";


export const registLoading = () => {

    return {
        type: REGIST_LOADING,
    }
}
export const registSucces = () => {
    return {
        type: REGIST_SUCCES,
    }
}
export const registError = (error) => {
    return {
        type: REGIST_FAILED,
        payload: error,
    }
}
export const fetchRegist = (userData) => (dispatch) => {
    dispatch(registLoading());
    const {
        image = "",
        login,
        password,
        tel
    } = userData;
    axios.post("https://maken-task.herokuapp.com/api/user", {
        id: 0, 
        image: image,
        login: login.value,
        password: password.value,
        telegram: tel.value,
    })
        .then(token => {
            dispatch(registSucces());
            dispatch(setTokenStore(token.data.value)); 
            setToken(token.data.value); 
        })
        .catch((error) => {
            dispatch(registError(error.message));
        })
}