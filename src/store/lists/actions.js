import axios from "axios";

import { } from "../../services/LocalStorage/localStorage";
import { } from "../userData/actions";
import { LIST_ADD_TASK, LIST_FAILED, LIST_GET_ALL, LIST_LOADING, LIST_SUCCES } from "./constants";


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
export const listSetStore = (data) => {
    return {
        type: LIST_GET_ALL,
        payload: data,
    }
}
export const listAddTask = (res) => {
    return {
        type: LIST_ADD_TASK,
        payload: res.value,
    }
}
export const fetchLists = (token, id) => (dispatch) => {
    dispatch(listLoading());
    axios.get(`https://maken-task.herokuapp.com/api/dashboard/get-all/${id}`,
        {
            headers: {
                "Authorization": token,
            },
        }

    )
        .then(res => {
            dispatch(listSetStore(res.data));
            dispatch(listSucces());
        })
        .catch((error) => {
            dispatch(listError(error));
        })
}
export const fetchAddtask = (token, listId, name) => (dispatch) => {
    dispatch(listLoading());
    axios.post(`https://maken-task.herokuapp.com/api/card`,
        {
            "adminRating": 0,
            "deadline": "2025-01-03 22:22",
            "description": "string",

            "labelId": 1,
            "listId": listId,
            "name": name
        },
        {
            headers: {
                "Authorization": token,
            },
        }

    )
        .then(res => {
            console.log(res);
            dispatch(listSucces());
            dispatch(listAddTask(res.data));
        })
        .catch((error) => {
            dispatch(listError(error));
        })
}
