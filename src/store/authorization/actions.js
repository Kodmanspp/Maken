import axios from "axios";
import { localSetArray } from "../../services/LocalStorage/localStorage";
import { setUserData } from "../userData/actions";
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
    axios.post("https://maken-task.herokuapp.com/api/user/sign-in", {
        login: login,
        password: password,
    })
        .then(user => {
            const userData = user.data.value;
            
            dispatch(loginSucces());
            dispatch(setUserData(userData));
        
            localSetArray([{name: "token", data: userData.token}, {name: "id", data: userData.id}]);
        })
        .catch((error) => {
            dispatch(loginError(error.message));
        })
}