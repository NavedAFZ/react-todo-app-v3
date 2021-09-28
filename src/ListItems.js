import React, { useState } from "react";
import "./ListItems.css";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import FlipMove from "react-flip-move";
import TodoItem from "./Components/TodoItem";
import Completed from "./Components/Completed";
import NotCompleted from "./Components/NotCompleted";

const ListItems = (props) => {
  const [dis, setDis] = useState("none");
  const [notC, setNotC] = useState("none");
  const [btnDis, setBtnDis] = useState("none");
  const val1 = props.items.filter((item) => {
    if (item.text !== "") {
      return item;
    }
  });

  const val = val1.map((item) => {
    return (
      <div key={item.key}>
        <TodoItem
          key={item.key}
          item={item}
          completed={item.complete}
          handleToggle={props.handleToggle}
          setUpdate={props.setUpdate}
          deleteItem={props.deleteItem}
        />
        </div>
    );
  });
  const completed = props.items.map((item) => {
    if (item.complete) {
      return (
       
        <div className="ui mini success message" key={item.key} >
        
        <div className="header">
         {item.text}
         </div>
       </div>
      );
    } 
  });

  const notCompleted = props.items.map((item) => {
    if (!item.complete) {
      return (
        <div className="ui mini negative message" key={item.key}>
        
        <div className="description">
         {item.text}
         </div>
       </div>
        
      );
    } 
  });

  return (
    <div style={{}}>
      <FlipMove duration={300} easing="ease-in-out">
        {val}
      </FlipMove>
      <hr/>
      <div className="ui grid"  >
      <div class="eight wide column"  >
      <Completed dis={dis} setDis={setDis} value={completed}/>
      </div>
      {/* <div className="eight wide column"></div> */}
      <div class="eight wide column">
      <NotCompleted notC={notC} setNotC={setNotC} value={notCompleted} />
      </div>
      </div>
      {}
    </div>
  );
};

export default ListItems;
