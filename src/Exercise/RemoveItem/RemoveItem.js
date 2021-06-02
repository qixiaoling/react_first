import React, {useState} from 'react'
import todosData from "../../todosData";
import Item from "./Item";

function RemoveItem() {
    const [items, setItems] = useState(todosData);

    function handleClick(id) {
        const itemsNew = items.filter((item) => item.id!==id);
        setItems(itemsNew)
    }

    return (
        <div>
            <div>
                {items.map((item) => {
                    return (
                        <Item key={item.id} {...item}
                              handleClick={handleClick}/>
                    )
                })}
            </div>
            <div>
                <button onClick={()=>setItems([])}>reset all</button>
            </div>
        </div>

    )


}

export default RemoveItem