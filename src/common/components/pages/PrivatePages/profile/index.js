import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router";
import { clearUserData, fetchUserData } from "../../../../../store/userData/actions";




export const Profile = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [image, setImage] = useState(null);

    const user = useSelector(store => store.user);
    function leave() {
        localStorage.clear();
        dispatch(clearUserData());
        navigate("/authorization");
    }

    useEffect(() => {
    

        // if (user.data.login === "") {
        //     dispatch(fetchUserData(user.token, user.data.id, dispatch));
        // }
        if (user.request.error !== null) {
            leave();
        }
        
    }, [user.request.error])

    function imageChange(e) {
        const newImage = e.target.files[0];
        setImage(newImage);
        console.log(newImage);
    }
    if (user.request.loading === true) {
        return (
            <p>Loading</p>
        )
    }
    else {

        return (
            <div>
                <label htmlFor="img">
                    <img src={user.data.image} alt="Avatar" width="20px" />
                </label>
                <input type="file" onChange={imageChange} />

                <p>{user.data.login}</p>
                <p>{user.data.email}</p>
                <button onClick={leave}>Leave</button>
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
