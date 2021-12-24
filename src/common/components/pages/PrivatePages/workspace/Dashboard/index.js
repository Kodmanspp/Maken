import { useEffect } from "react"
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux"
import { fetchLists } from "../../../../../../store/lists/actions";

export const Dashboard = (index) => {
    const dispatch = useDispatch();
    const token = useSelector(state => state.user.token); 
    const lists = useSelector(state => state.lists.lists);
    const listFilter = lists.filter(item => item.dashboardId === index.index + 1); 
    console.log(lists);
    console.log(index.index);
    useEffect(()=>{
        dispatch(fetchLists(token));        
    }, [])
    return (
        <div>
            { listFilter.map((item, index) => {
                return <h2 key={index}>{item.name}</h2>
            })}
        </div>
    )
}
