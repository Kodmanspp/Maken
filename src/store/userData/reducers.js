import { localGetItem } from "../../services/LocalStorage/localStorage";
import { SET_USER_DATA, CLEAR_USER_DATA, USER_LOADING, USER_SUCCES, USER_FAILED, SET_TOKEN_STORE, SET_IMAGE_STORE } from "./constants";
import avatar from "../../assets/avatar/avatar.png"; 
const initialState = {
    token: localGetItem("token") ? localGetItem("token") : null,
    data: {
        id: localGetItem("id") ? localGetItem("id") : null,
        image: avatar,
        login: "",
        email: "",

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
                token: action.payload.token ? action.payload.token : localGetItem("token"),
                data: {
                    id: action.payload.id,
                    login: action.payload.login,
                    image: action.payload.image === null ? avatar: action.payload.image,
                    email: action.payload.email, 
                }

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
                    loading: true,
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
        case SET_IMAGE_STORE:
            return {
                ...state, 
                data:{...state.data, image: action.payload} 
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