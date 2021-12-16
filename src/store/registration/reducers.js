import { REGIST_LOADING, REGIST_FAILED, REGIST_SUCCES} from "./constants";

const initialState = {
    token: "",
    loading: false,
    error: null,
    succes: true,
}

export default function registReducer(state = initialState, action){
    
    switch(action.type){
        case REGIST_LOADING:
            console.log(state, "reg loading");
            return {...state, loading: true};
        case REGIST_SUCCES: 
        console.log(state, "reg suc");
            return {...state, token: action.payload ,succes: true, loading: false, error: null};

        case REGIST_FAILED: 
        console.log(state, "reg fail");
            return {...state, succes: false, loading: false, error: action.payload};

        default: console.log(state, "reg lol"); return state; 
    }
}