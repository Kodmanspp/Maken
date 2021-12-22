import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router";
import { clearUserData, fetchUserData } from "../../../../../store/userData/actions";
import ProfileEdit from "./ProfileEdit";
import ProfileData from "./ProfileData";



export const Profile = () => {
    
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [edit, setEdit] = useState(false);

    const user = useSelector(store => store.user);
    function leave() {
        localStorage.clear();
        dispatch(clearUserData());
        navigate("/authorization");
    }

    useEffect(() => {
        if(user.request.error !== null){
            leave();            
        }
        else if(user.data.login === ""){
            dispatch(fetchUserData(user.token, user.data.id, dispatch)); 
        }
    }, [])

    function editChange(){
        setEdit(!edit);
        console.log(edit);  
    }

    if(user.request.loading === true){
        return(
            <p>Loading</p>
        )
    }
    else{
        return (
            <div>
                {edit ? <ProfileEdit props={user.data}/> : <ProfileData props={user.data}/>}
                <button onClick={leave}>Leave</button>
                <button onClick={editChange}>{edit ? "Настройки" : "Изменить" }</button>
            </div>
        )
    }
}
