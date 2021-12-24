import {  LIST_LOADING, LIST_SUCCES, LIST_FAILED, LIST_GET_ALL } from "./constants";

const initialState = {
    lists: [],
    request: {
        loading: false, 
        succes: false, 
        error: null, 
    }
}

export default function listsReducer(state = initialState, action) {

    switch (action.type) {
        case LIST_LOADING:
            return {
                ...state,
                loading: true,
                error: null, 
            };
        case LIST_SUCCES:
            return {
                ...state,
                succes: true,
                loading: false,
                error: null
            };
        case LIST_FAILED:
            return {
                ...state,
                loading: false,
                error: action.payload
            };
        case LIST_GET_ALL: {
            return{
                ...state, 
                lists: action.payload, 
            }
        }
        default:
            return state;
    }
}