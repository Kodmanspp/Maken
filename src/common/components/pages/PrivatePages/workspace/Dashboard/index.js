
import { useSelector } from "react-redux";
import { List } from "../Lists";
import style from "../workspace.module.scss";

export const Dashboard = () => {
    const list = useSelector(state => state.lists);
    return (
        <div className={style.lit}>
            {list.lists.length !== 0 ? 
            list.lists.map((item, index) => {
                return <List key={index} data={item} />
            }) 
            : 
            <p>pusto</p>}
        </div>
    )
}
