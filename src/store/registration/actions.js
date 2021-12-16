import axios from "axios";
import { setToken } from "../../services/LocalStorage/token";
import { REGIST_FAILED, REGIST_LOADING, REGIST_SUCCES } from "./constants";


export const registLoading = () =>{

    return{
        type: REGIST_LOADING,
    }
}
export const registSucces = (token) =>{
    return{
        type: REGIST_SUCCES,
        payload: token,
    }
}
export const registError = (error) =>{
    return{
        type: REGIST_FAILED,
        payload: error, 
    }
}
export const fetchRegist = (userData) => (dispatch) => {
    dispatch(registLoading);
    // const {image, login, password, tel} = userData; 
    axios.post("http://localhost:1717/signin",{
        // image: image,
        // login: login, 
        // password: password,
        // telegram: tel, 
        username: "killi",
        password: "blame",
        firstname: "killi",
        age: 3000,
    })
    .then(token => {
        dispatch(registSucces(token.data.token));
        setToken(token.data.token); 
    })
    .catch((error) => {
        dispatch(registError(error.message));
    })
}