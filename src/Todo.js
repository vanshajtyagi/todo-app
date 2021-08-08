import React ,{ useState} from 'react';
import { List, ListItem, ListItemText,ListItemAvatar,Modal} from "@material-ui/core";
import db from "./firebase";
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import EditIcon from '@material-ui/icons/Edit';
import {makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles((theme) => ({
        paper: {
          position: 'absolute',
          width: 400,
          backgroundColor: theme.palette.background.paper,
          border: '2px solid #000',
          boxShadow: theme.shadows[5],
          padding: theme.spacing(2, 4, 3),
        },
      }));
      
function Todo(props) {
    const [open,setOpen]=useState(false);
    const classes = useStyles();
    const [input,setInput]= useState();
    
    const handleOpen= () =>{
        setOpen(true);
    };
    const updateTodo =() =>{
        db.collection('todos').doc(props.todo.id).set({todo:input },{merge:true})
        setOpen(false);};
    
    return (
        <>
        <Modal open={open} onClose = {e=> setOpen(false)}>
          <div className={classes.paper}>
              <h1>i am the modal edit me</h1>
              <input placeholder ={props.todo.todo} value={input} onChange={e => setInput(e.target.value)}/>
            <button onClick={updateTodo}>Update Todo</button>
        </div>
        </Modal>
        <List>
            <ListItem className="todo_list">
                <ListItemAvatar></ListItemAvatar>
                <ListItemText primary={props.todo.todo} secondary="dummy deadline 🕗 "/>
            </ListItem>
           {/* <li>{props.text}</li>  */}
           <EditIcon onClick={e=>setOpen(true)} ></EditIcon>
           <DeleteForeverIcon onClick={event=> db.collection('todos').doc(props.todo.id).delete()}>❌ delete</DeleteForeverIcon>
        </List>
        </>
    )
}

export default Todo;
