
import { useSelector } from "react-redux";
import { List } from "../Lists";


export const Dashboard = () => {
    const list = useSelector(state => state.lists);
    return (
        <div>
            {list.lists.length !== 0 ? 
            list.lists.map((item, index) => {
                return <List key={index} data={item} />
            }) 
            : 
            <p>pusto</p>}
        </div>
    )
}
