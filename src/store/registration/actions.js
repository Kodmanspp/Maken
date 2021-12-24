import axios from "axios";

import { localSetArray } from "../../services/LocalStorage/localStorage";
import {  setUserData } from "../userData/actions";
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
        login,
        password,
        email,
    } = userData;
    axios.post("https://maken-task.herokuapp.com/api/user", {
        email: email.value,
        id: 0, 
        image: 0,
        login: login.value,
        password: password.value,
    })
        .then(user => {
            const userData = user.data.value;
            
            dispatch(registSucces());
            dispatch(setUserData(userData));

            localSetArray([{name: "token", data: userData.token}, {name: "id", data: userData.id}]);

        })
        .catch((error) => {
            dispatch(registError(error.message));
        })
}