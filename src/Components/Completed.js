import React from 'react'

import '../ListItems.css'
const Completed=(({dis,setDis,value})=>{
return(
    <div>
      <button
      style={{marginRight:"30px"}}
        className="ui button viewList"
        //   style={{display:btn}}
        onClick={() => {
          dis === "none" ? setDis("block") : setDis("none");
        }}
      >
        Completed Tasks
      </button>
      <div className="myList" style={{ display: dis }}>
        {value}
      </div>
      <br />
      <br />
   
    </div>
)
})

export default Completed