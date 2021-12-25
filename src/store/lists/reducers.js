import {  LIST_LOADING, LIST_SUCCES, LIST_FAILED, LIST_GET_ALL, LIST_ADD_TASK } from "./constants";

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
                request: {
                    ...state.request,
                    loading: true,
                }
            };
        case LIST_SUCCES:
            return {
                ...state,
                request: {
                    ...state.request,    
                        succes: true,
                        loading: false,
                    
                }
            };
        case LIST_FAILED:
            return {
                ...state,
                request: {
                    ...state.request,
                    error: action.payload,
                    loading: false,
                }
            };
        case LIST_GET_ALL: {
            return{
                ...state, 
                lists: action.payload, 
            }
        }
        case LIST_ADD_TASK:
            return {
                ...state,
                lists: [...state.lists, action.payload], 
            }
        default:
            return state;
    }
}