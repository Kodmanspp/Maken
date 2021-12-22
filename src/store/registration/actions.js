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
        telegram: tel,
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