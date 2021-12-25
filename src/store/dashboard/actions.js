import axios from "axios";

import { } from "../../services/LocalStorage/localStorage";
import { } from "../userData/actions";
import { DASH_CREATE, DASH_FAILED, DASH_GET_ALL, DASH_LOADING, DASH_SUCCES } from "./constants";


export const dashLoading = () => {

    return {
        type: DASH_LOADING,
    }
}
export const dashSucces = () => {
    return {
        type: DASH_SUCCES,
    }
}
export const dashError = (error) => {
    return {
        type: DASH_FAILED,
        payload: error,
    }
}
export const dashSetStore = (data) => {
    return {
        type: DASH_GET_ALL,
        payload: data,
    }
}
export const dashPost = (res) => {
    console.log(res.value); 
    return {
        type: DASH_CREATE,
        payload: res.value, 
    }
}
export const fetchDashboard = (token) => (dispatch) => {
    dispatch(dashLoading());
    axios.get("https://maken-task.herokuapp.com/api/dashboard/get-user-dashboards",
        {
            headers: {
                "Authorization": token,
            },
        }
    )
        .then(res => {
            
                dispatch(dashSetStore(res.data));
                dispatch(dashSucces());
            
        })
        .catch((error) => {
            dispatch(dashError(error));
        })
}
export const fetchDashboardAdd = (token, name) => (dispatch) => {
    dispatch(dashLoading());
    axios.post("https://maken-task.herokuapp.com/api/dashboard",
        {
            name: name,
        },
        {
            headers: {
                "Authorization": token,
            },
        }
    )
        .then(res => { 
            dispatch(dashPost(res.data));
            dispatch(dashSucces());
        })
        .catch((error) => {
            dispatch(dashError(error));
        })
}
