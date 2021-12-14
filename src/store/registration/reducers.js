import { LOGIN_FAILED, LOGIN_LOADING, LOGIN_SUCCESS } from "./constants";

const initialState = {
    token: "",
    loading: false,
    error: null,
    succes: true,
}

export default function authReducer(state = initialState, action){
    console.log(state); 
    switch(action.type){
        case LOGIN_LOADING:
            return {...state, loading: true};

        case LOGIN_SUCCESS: 
            return {...state, token: action.payload ,succes: true, loading: false, error: null};

        case LOGIN_FAILED: 
            return {...state, succes: false, loading: false, error: action.payload};

        default: return state; 
    }
}