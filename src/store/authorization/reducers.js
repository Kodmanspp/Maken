import { getToken } from "../../services/LocalStorage/token";
import { LOGIN_FAILED, LOGIN_LOADING, LOGIN_SUCCESS } from "./constants";

const initialState = {
    loading: false,
    error: null,
    succes: false,
}

export default function authReducer(state = initialState, action) {
    switch (action.type) {
        case LOGIN_LOADING:
            return {
                ...state,
                loading: true
            };

        case LOGIN_SUCCESS:
            return {
                ...state,
                succes: true,
                loading: false,
                error: null
            };

        case LOGIN_FAILED:
            return {
                ...state,
                loading: false,
                error: action.payload
            };

        default: return state;
    }
}