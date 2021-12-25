import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAddtask } from "../../../../../../store/lists/actions";
import { useFormInput } from "../../../../../hooks/customHooks";
import style from "../workspace.module.scss";
export const List = (data) => {

    const dispatch = useDispatch()
    const item = data.data;
    const [inputChange, setInputChange] = useState(false);
    const inputValue = useFormInput("");
    const token = useSelector(state => state.user.token); 


    function onChange() {
        setInputChange(true);
    }
    
    function submitData(e){
        e.preventDefault(); 
        console.log(item.id, inputValue.value); 
        dispatch(fetchAddtask(token, item.id, inputValue.value)); 
        setInputChange(false);
        console.log(item); 
    }
   
    return (
        <div>
            <h2 className={style.itemName}>{item.name}</h2>
            {
                    item.cardModels.map((item, index) => {
                        return <p key={index}>{item.name}</p>
                    })
                    
            }
            {
                inputChange ?
                    <form onSubmit={submitData}>
                        <input type="text" {...inputValue} />
                        <input type="submit"></input>
                    </form>
                    :
                    <button onClick={onChange}>add new task</button>
            }
        </div>
    )
}
