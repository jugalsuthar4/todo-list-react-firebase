
import './App.css';
import {useEffect, useState} from  "react";
import Todo from "./Todo";
import SendIcon from '@material-ui/icons/Send';
import { Button, ownerDocument } from '@material-ui/core';
import db from "./firebase"
import firebase from "firebase";

function App() {
  const [input,setInput]=useState("");
  const [todos,setTodo]=useState([])
 

  useEffect(()=>{
    db.collection('todos').orderBy("timestamp","desc").onSnapshot((snapshot)=>{
      //console.log(snapshot.docs.map((doc)=>doc.data()))
     // setTodo(snapshot.docs.map((doc)=>doc.data().text))  //map method returns array and fit into todo =>settodo
      setTodo(snapshot.docs.map(doc=>({uniqueId:doc.id,text:doc.data().text})))
    })
  },[])
  const addList=(e)=>{
    e.preventDefault();
   // setTodo([...todos,input]);
    db.collection("todos").add({
     text:input,
     timestamp:firebase.firestore.FieldValue.serverTimestamp()
    })
    setInput("");
    
  }
  return (
    <div className="App">
    <h1 style={{color:"#542e71"}}>TODO LIST</h1>
       <div className="showData">
         {
           todos.map((todo)=>{
             return(
               <Todo data={todo.text} id={todo.uniqueId}/>
             )
           })
         }
       </div>
       <div className="input">
           <form>
             <input value={input} onChange={e=>setInput(e.target.value)} type="text"/>
             <Button disabled={!input} color="secondary" type="submit" onClick={addList}><SendIcon /></Button>
           </form>
       </div>
    </div>
  );
}

export default App;
