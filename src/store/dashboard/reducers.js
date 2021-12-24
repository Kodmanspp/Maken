import { DASH_GET_ALL, DASH_LOADING, DASH_SUCCES, DASH_FAILED } from "./constants";

const initialState = {
    dashboards: [],
    request: {
        loading: false, 
        succes: false, 
        error: null, 
    }
}

export default function dashReducer(state = initialState, action) {

    switch (action.type) {
        case DASH_LOADING:
            return {
                ...state,
                loading: true,
                error: null, 
            };
        case DASH_SUCCES:
            return {
                ...state,
                succes: true,
                loading: false,
                error: null
            };
        case DASH_FAILED:
            return {
                ...state,
                loading: false,
                error: action.payload
            };
        case DASH_GET_ALL:{
            return{
                ...state, 
                dashboards: action.payload, 
            }
        }
        default:
            return state;
    }
}