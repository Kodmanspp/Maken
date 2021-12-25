import axios from "axios"
import { ENDPOINT, user } from "../../services/api/ENDPOINTS"
import { localSetArray } from "../../services/LocalStorage/localStorage"
import { CLEAR_USER_DATA, SET_IMAGE_STORE, SET_USER_DATA, USER_FAILED, USER_LOADING, USER_SUCCES } from "./constants"

export const setUserData = (data) => {
    return {
        type: SET_USER_DATA,
        payload: data,
    }
}

export const clearUserData = () => {
    return {
        type: CLEAR_USER_DATA,
    }
}

export const userLoading = () => {
    return {
        type: USER_LOADING,
    }
}
export const userSucces = () => {
    return {
        type: USER_SUCCES,
    }
}
export const userFailed = (error) => {
    return {
        type: USER_FAILED,
        payload: error,
    }
}
export const userSetImage = (image) => {
    return {
        type: SET_IMAGE_STORE,
        payload: image,
    }
}
export const fetchUserData = (token, id) => (dispatch) => {
    dispatch(userLoading());
    
    axios.get(`${ENDPOINT}${user}/${id}`,
        {
            headers: {
                "Authorization": token,
            },
        }
    )
        .then(user => {
            const userData = user.data.value
            dispatch(setUserData(userData));
            dispatch(userSucces());
            console.log(userData); 
            userData.token && localSetArray([{ name: "token", data: userData.token }, { name: "id", data: userData.id }]);
            localSetArray([ {name: "img", data: userData.image}]);
        })
        .catch(error => {
            dispatch(userFailed(error));
        })

}
export const setImage = (image, token) => (dispatch) => {
    dispatch(userLoading());
    axios.put(`${ENDPOINT}${user}/update-image`, image,
        {
            headers: {
                "Authorization": token,
                'Content-Type': 'multipart/form-data',
                "enctype": "multipart/form-data",

            },
        }).then(user => {
            const userData = user.data.value
            dispatch(setUserData(userData));
            dispatch(userSucces());
            localSetArray([{name: "img", data: userData.image}]);

        }).catch(error => {
            dispatch(userFailed(error));
        });
}
















































// // export const fetchUserUpdate = (tokenData, loginData) => (dispatch) => {

// //     // dispatch(userLoading());
// //     axios.put(`${ENDPOINT}${user}/update-name`,
// //         {
// //             login: loginData,
// //             token: tokenData,
// //         },
// //         {
// //             headers: {
// //                 'Authorization': tokenData
// //             }
// //         })
// //         .then(user => {
// //             console.log(user);
// //             // const userData = user.data.value;
// //             // dispatch(setUserData(userData));
// //             // dispatch(userSucces());
// //         })
// //         .catch(error => {
// //             // dispatch(userFailed(error));
// //             console.log(error);

// //         })

// }
