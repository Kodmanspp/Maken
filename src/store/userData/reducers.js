import { getToken } from "../../services/LocalStorage/token";
import { SET_USER_DATA, CLEAR_USER_DATA, USER_LOADING, USER_SUCCES, USER_FAILED, SET_TOKEN_STORE } from "./constants";

const initialState = {
    token: getToken(),
    data: {
        id: null,
        image: null,
        login: "",
        telegram: "",

    },
    request: {
        loading: false,
        succes: false,
        error: null,
    }
}

export default function userReducer(state = initialState, action) {

    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...{ data: action.payload },
            };
        case SET_TOKEN_STORE:
            return {
                ...state,
                ...{ token: action.payload },
            };
        case CLEAR_USER_DATA:
            return {
                ...initialState,
                token: "",
            };
        case USER_LOADING: {
            return {
                ...state,
                request: {
                    loading: false,
                    succes: false,
                    error: null,
                }
            }
        }
        case USER_SUCCES: {
            return {
                ...state,
                request: {
                    loading: false,
                    succes: true,
                    error: null,
                }

            }
        }
        case USER_FAILED: {
            return {
                ...state,
                request: {
                    loading: false,
                    succes: false,
                    error: action.payload,
                }

            }
        }
        default:
            return state;
    }
}