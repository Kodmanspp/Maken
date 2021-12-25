import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router";
import { clearUserData, fetchUserData, setImage } from "../../../../../store/userData/actions";
import style from "./profile.module.scss"; 



export const Profile = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const token = useSelector(state => state.user.token); 


    const user = useSelector(store => store.user);
    function leave() {
        localStorage.clear();
        dispatch(clearUserData());
        navigate("/authorization");
    }

    useEffect(() => {
    

        if (user.data.login === "") {
            console.log(user.token); 
            dispatch(fetchUserData(user.token, user.data.id, dispatch));
        }
        if (user.request.error !== null) {
            leave();
        }
        
    }, [user.request.error])

    function imageChange(e) {

        const formData = new FormData();
        formData.append("file", e.target.files[0]);         
        dispatch(setImage(formData, token, dispatch)); 
    }
    if (user.request.succes !== true) {
        return (
            <p className={style.loading}>Loading</p>
        )
    }
    else {

        return (
            <div className={style.container}>
                <label htmlFor="img" className={style.image_container}>
                    <img className={style.image} src={user.data.image} alt="Avatar" />
                    <p className={style.edit}>изменить</p>
                </label>
                <input className={style.fileInput} type="file" accept="png/jpg" id="img" onChange={imageChange} />
                <p className={style.login} >Login: {user.data.login}</p>
                <p className={style.email}>Email: {user.data.email}</p>
                <button className={style.leave_btn} onClick={leave}>Leave</button>
            </div>
        )






        // return (
        //     <div>
        //         {edit ? <ProfileEdit props={user.data}/> : <ProfileData props={user.data}/>}
        //         <button onClick={leave}>Leave</button>
        //         <button onClick={editChange}>{edit ? "Настройки" : "Изменить" }</button>
        //     </div>
        // )
    }
}
