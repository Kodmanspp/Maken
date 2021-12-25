import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { fetchDashboard, fetchDashboardAdd } from "../../../../../store/dashboard/actions";
import { fetchLists } from "../../../../../store/lists/actions";
import { useFormInput } from "../../../../hooks/customHooks";
import { Dashboard } from "./Dashboard";

import style from "./workspace.module.scss";


export const WorkSpace = () => {
    const token = useSelector(state => state.user.token);
    const dash = useSelector(state => state.dash);
    const list = useSelector(state => state.lists);
    const name = useFormInput("");
    const [addName, setAddname] = useState(false);
    const [board, setBoard] = useState(0);
    const dispatch = useDispatch();


    useEffect(() => {
        dispatch(fetchDashboard(token));
    }, []);

    useEffect(() => {
        if (dash.request.succes === true) {
            dispatch(fetchLists(token, dash.dashboards[0]?.id));
            setBoard(dash.dashboards[0]?.id);
        }
    }, [dash.request.succes]);

    function choiseBoard(index) {
        dispatch(fetchLists(token, index));
        setBoard(index);
    }
    function addNewDash() {
        let data = name.value; 
        console.log(data); 
        if(data === ""){
            data = `workspace ${dash.dashboards.length + 1}`
        }
        dispatch(fetchDashboardAdd(token, data, addNewDash));
    }
    function inputTrue(){
        setAddname(true);
    }
    function inputFalse(){
        setAddname(false);
    }
    if (dash.request.succes !== true) {
        return <p>loading</p>
    }
    else {
        return (
            <div className={style.container}>
                <div className={style.navigate}>
                    { dash.dashboards.map((item, index) => {
                         
                        return <div key={index}>
                            {
                                item.id === board ?
                                    <button style={{ "backgroundColor": "wheat" }} className={style.nav_btn} onClick={() => choiseBoard(item.id)}>{item.name}</button>
                                    :
                                    <button className={style.nav_btn} onClick={() => choiseBoard(item.id)}>{item.name}</button>
                            }

                        </div>
                    })}
                    {
                        addName ?
                            <div className="">
                                <input type="text" required {...name} />
                                <button onClick={addNewDash}>set</button>
                                <button onClick={inputFalse}>close</button>
                            </div> 
                            :
                            <button onClick={inputTrue}>create new Dashboard</button>
                    }
                </div>
                <div>
                    <Dashboard index={list} />
                </div>
            </div>
        )
    }
}
