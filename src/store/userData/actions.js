import axios from "axios"
import { ENDPOINT, user } from "../../services/api/ENDPOINTS"
import { CLEAR_USER_DATA, SET_TOKEN_STORE, SET_USER_DATA, USER_LOADING, USER_SUCCES } from "./constants"

export const setUserData = (data) => {
    return {
        type: SET_USER_DATA,
        payload: data,
    }
}
export const setTokenStore = (data) => {
    return {
        type: SET_TOKEN_STORE,
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
        type: USER_LOADING,
        payload: error,  
    }
}
export const fetchUserData = (token) => (dispatch) => {
    dispatch(userLoading());
    axios.get(`${ENDPOINT}${user}/6`, {
        Headers: {
            "Authorization": token,
        },
    })
        .then(data => {
            const user = data.data.value; 
            dispatch(setUserData(user)); 
            dispatch(userSucces());   
        })
        .catch(error => {
            dispatch(userFailed(error)); 
        })
    
}
