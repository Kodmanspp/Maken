import { REGIST_LOADING, REGIST_FAILED, REGIST_SUCCES } from "./constants";

const initialState = {
    loading: false,
    error: null,
    succes: false,
}

export default function registReducer(state = initialState, action) {

    switch (action.type) {
        case REGIST_LOADING:
            return {
                ...state,
                loading: true,
                error: null, 
            };
        case REGIST_SUCCES:
            return {
                ...state,
                succes: true,
                loading: false,
                error: null
            };
        case REGIST_FAILED:
            return {
                ...state,
                loading: false,
                error: action.payload
            };
        default:
            return state;
    }
}