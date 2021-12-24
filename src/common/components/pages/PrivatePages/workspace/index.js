import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { fetchDashboard } from "../../../../../store/dashboard/actions";
import { Dashboard } from "./Dashboard";


export const WorkSpace = () => {
    const token = useSelector(state => state.user.token);
    const dash = useSelector(state => state.dash.dashboards); 
    const [board, setBoard] = useState(0); 
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(fetchDashboard(token));
    }, [])


    function choiseBoard(index){
        setBoard(index); 
    }

    return (
        <div>
            {dash.map((item, index) => {
                return <div key={index}>
                    <button onClick={()=>choiseBoard(index)}>{item.name}</button>
                </div>
            })}
            <button>add new dashboard</button>

            <div>
                <Dashboard index={board}/>
            </div>
        </div>
    )
}
