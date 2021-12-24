import axios from "axios";

import { } from "../../services/LocalStorage/localStorage";
import { } from "../userData/actions";
import { TASK_FAILED, TASK_GET_ALL, TASK_LOADING, TASK_SUCCES } from "./constants";


export const taskLoading = () => {

    return {
        type: TASK_LOADING,
    }
}
export const taskSucces = () => {
    return {
        type: TASK_SUCCES,
    }
}
export const taskError = (error) => {
    return {
        type: TASK_FAILED,
        payload: error, 
    }
}
export const taskSetStore = (data) =>{
    return{
        type: TASK_GET_ALL,
        payload: data,
    }
}
export const fetchLists = (token) => (dispatch) => {

    axios.get("https://maken-task.herokuapp.com/api/list/get-all", {
    },
        {
            Headers: {
                "Authorization": token,
            },
        }

    )
        .then(res => {
            dispatch(taskSetStore(res.data));
            console.log(res.data); 
        })
        .catch((error) => {

        })
}