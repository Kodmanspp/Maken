import axios from "axios"
import { ENDPOINT, user } from "../../services/api/ENDPOINTS"
import { localSetArray } from "../../services/LocalStorage/localStorage"
import { CLEAR_USER_DATA, SET_IMAGE_STORE, SET_USER_DATA, USER_FAILED, USER_LOADING, USER_SUCCES } from "./constants"

export const setUserData = (data) => {
    return {
        type: SET_USER_DATA,
        payload: data,
    }
}

export const clearUserData = () => {
    return {
        type: CLEAR_USER_DATA,
    }
}

export const userLoading = () => {
    return {
        type: USER_LOADING,
    }
}
export const userSucces = () => {
    return {
        type: USER_SUCCES,
    }
}
export const userFailed = (error) => {
    return {
        type: USER_FAILED,
        payload: error,
    }
}
export const userSetImage = (image) => {
    return {
        type: SET_IMAGE_STORE,
        payload: image,
    }
}
export const fetchUserData = (token, id) => (dispatch) => {

    dispatch(userLoading());
    axios.get(`${ENDPOINT}${user}/${id}`, {
        Headers: {
            "Authorization": token,
        },
    })
        .then(user => {
            const userData = user.data.value;
            dispatch(setUserData(userData));
            dispatch(userSucces());

            userData.token && localSetArray([{ name: "token", data: userData.token }, { name: "id", data: userData.id }]);
        })
        .catch(error => {
            dispatch(userFailed(error));

        })

}
export const fetchUserUpdate = (token, login) => (dispatch) => {

    dispatch(userLoading());
    axios.put(`${ENDPOINT}${user}`,
        {
            login: login,
        },
        {
            Headers: {
                "Authorization": token,
            },
        })
        .then(user => {
            const userData = user.data.value;
            dispatch(setUserData(userData));
            dispatch(userSucces());
        })
        .catch(error => {
            dispatch(userFailed(error));

        })

}
