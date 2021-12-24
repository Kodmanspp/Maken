import axios from "axios";

import { } from "../../services/LocalStorage/localStorage";
import { } from "../userData/actions";
import { DASH_FAILED, DASH_GET_ALL, DASH_LOADING, DASH_SUCCES, LIST_FAILED, LIST_GET_ALL, LIST_LOADING, LIST_SUCCES } from "./constants";


export const listLoading = () => {

    return {
        type: LIST_LOADING,
    }
}
export const listSucces = () => {
    return {
        type: LIST_SUCCES,
    }
}
export const listError = (error) => {
    return {
        type: LIST_FAILED,
        payload: error, 
    }
}
export const listSetStore = (data) =>{
    return{
        type: LIST_GET_ALL,
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
            dispatch(listSetStore(res.data));
            console.log(res.data); 
        })
        .catch((error) => {

        })
}