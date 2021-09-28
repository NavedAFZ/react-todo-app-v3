import React from 'react'

import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import FlipMove from "react-flip-move";
import '../ListItems.css'

const TodoItem=(({item,completed,setUpdate,handleToggle,deleteItem})=>{
    const line=completed?"strike":"";
return(
    <div>
         <div className="List " key={item.key}>
        <p>
          <input
           className={line}
            type="text"
            id={item.key}
            value={item.text}
            onChange={(e) => {
              setUpdate(e.target.value, item.key);
            }}
          />
          { <span class="chk">
            <input
             type="checkbox" 
             className="field"
             defaultChecked={item.completed}
             onChange={(e)=>handleToggle(item.key)}
             />
          </span> }
          <span>
            <FontAwesomeIcon
              className="faicons"
              icon="trash"
              onClick={() => {
                deleteItem(item.key);
              }}
            />
          </span>
        </p>
      </div>
    </div>
)
})


export default TodoItem