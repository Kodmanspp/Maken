import { DASH_GET_ALL, DASH_LOADING, DASH_SUCCES, DASH_FAILED, DASH_CREATE } from "./constants";

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
                request: {
                    ...state.request,
                    loading: true,
                }
            };
        case DASH_SUCCES:
            return {
                ...state,
                request: {
                    ...state.request,    
                        succes: true,
                        loading: false,
                    
                }
            };
        case DASH_FAILED:
            return {
                ...state,
                request: {
                    ...state.request,
                    error: action.payload,
                    loading: false,
                }
            };
        case DASH_GET_ALL: {
            return {
                ...state,
                dashboards: action.payload,
            }
        }
        case DASH_CREATE:
            return {
                ...state,
                dashboards: [...state.dashboards, action.payload],
            }
        default:
            return state;
    }
}