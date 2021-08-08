import React,{useState,useEffect } from "react";
import './App.css';
import { Button,FormControl,Input,InputLabel } from "@material-ui/core";
import Todo from './Todo';
import db from './firebase';
import firebase from 'firebase';
function App() {
  const [todos,setTodos] = useState([]);
  const [input,setInput] = useState('');
  // console.log(input);
  useEffect(() => {
    db.collection('todos').orderBy('timestamp','desc').onSnapshot(snapshot =>{
      setTodos(snapshot.docs.map(doc =>  ({id:doc.id ,todo :doc.data().todo})))
    })
  },[]);
  const addTodo=(event) =>{
    // this will fire up when click on the button
    event.preventDefault(); // this is prevent the page from refreshing and adding and keeping the list.
    // console.log("this is working");
    db.collection('todos').add({
      todo:input,
      timestamp:firebase.firestore.FieldValue.serverTimestamp()
    })
    setTodos([...todos,input]);
    setInput('');// clear up the input after hitting enter , see on console 2 see.
  }
  return (
    <div className="App">
     <h1>Todo X List </h1>
     <form>
     <FormControl>
        <InputLabel >✅Whats Your TODO</InputLabel>
        <Input  value={input} onChange={ event => setInput(event.target.value)} />
     </FormControl>
       {/* <input value={input} onChange={ event => setInput(event.target.value)}/> */}
       <Button disabled={!input} type="submit" variant="contained" color="primary" onClick={addTodo}>Add Todo</Button>
     </form>
     
     <ul>
       {todos.map(todo =>(
         <Todo todo={todo}/>
         //  <li>{todo}</li>
       ))}
     </ul>
    </div>
  );
}

export default App;
