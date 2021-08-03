import React from "react";
import "./Todo.css";

import UpdateIcon from "@material-ui/icons/Update";
import DeleteOutlineIcon from "@material-ui/icons/DeleteOutline";
import { IconButton } from "@material-ui/core";
import db from "./firebase"


function Todo({data,id}) {
  //console.log(key)
  const updateDoc=(key)=>{
    //console.log("key is ",key)
    const newValue=prompt("enter new value :");
    db.collection("todos").doc(key).update({
      text: newValue
    });
    }

  const deleteDoc=(key)=>{
    db.collection("todos").doc(key).delete()
  }
  return (
    <div className="todo">
      <h1>{data}</h1>
      <div className="crud">
      <IconButton className="itcon" color="primary" onClick={()=>updateDoc(id)}><UpdateIcon style={{fontSize:30}}/></IconButton>
     <IconButton color="secondary" onClick={()=>deleteDoc(id)}><DeleteOutlineIcon style={{fontSize:30}}/></IconButton> 
    </div>
    </div>
  );
}

export default Todo;
