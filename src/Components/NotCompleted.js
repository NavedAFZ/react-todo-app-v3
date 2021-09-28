import React from 'react'

import '../ListItems.css'

const NotCompleted=(({notC,setNotC,value})=>{
return(
    <div>
      <button
        className="ui button viewList"
        //   style={{display:btn}}
        onClick={() => {
          notC === "none" ? setNotC("block") : setNotC("none");
        }}
      >
        Remaining Tasks
      </button>
      <div className="myList" style={{ display: notC }}>
        {value}
      </div>
      <br />
      <br />
      <br />
    </div>
)
})

export default NotCompleted