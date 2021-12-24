import axios from "axios";

import { } from "../../services/LocalStorage/localStorage";
import { } from "../userData/actions";
import { DASH_FAILED, DASH_GET_ALL, DASH_LOADING, DASH_SUCCES } from "./constants";


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
export const dashSetStore = (data) =>{
    return{
        type: DASH_GET_ALL,
        payload: data,
    }
}
export const fetchDashboard = (token, id) => (dispatch) => {

    axios.get("https://maken-task.herokuapp.com/api/dashboard", {
    },
        {
            Headers: {
                "Authorization": token,
            },
        }

    )
        .then(res => {
            if(Array.isArray(res.data)){
                const resId = res.data.filter(item => item.dashboardId === id); 
                dispatch(dashSetStore(resId));
            }
        })
        .catch((error) => {

        })
}