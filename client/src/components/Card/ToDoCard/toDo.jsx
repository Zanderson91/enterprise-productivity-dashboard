import React, { useState, useEffect } from 'react';
import ToDoForm from './toDoForm';
import { getAllToDos, removeToDo } from "../../../utils/toDoAPI";
import "./toDo.css";

function ToDo({ toDoList, setToDoList, completeTodoItem }) {
  const [edit, setEdit] = useState({
    id: null,
    value: '',
    eagerness: '',
  });
  const [itemID, setItemID] = useState(0);
  const [removeClickState, setRemoveClickState] = useState(false);

  //console.log("THE TODOLIST", toDoList);

  useEffect(() => {
    if (removeClickState) {
      const removeToDoItem = async() => {
        await removeToDo(itemID);
        const allToDos = await getAllToDos();
        setToDoList(allToDos);
        console.log(`TODO LIST AFTER REMOVING ${itemID}`, allToDos);        
      }
      removeToDoItem();
      setRemoveClickState(false);
    }
  },[removeClickState]);  

  const handleRemove = (id) => {
    setRemoveClickState(true);
    setItemID(id);
  };

  if (edit.id) {
    return <ToDoForm edit={edit} setEdit={setEdit} />;
  }

  return toDoList.map((item, i) => (
    <div
      className={
        item.isComplete
          ? `bucket-row complete ${item.eagerness}`
          : `bucket-row ${item.eagerness}`
      }
      key={i}
    >      
      <div key={item.id} onClick={() => completeTodoItem(item.id)}>
        {item.text}
      </div>
      <div className="icons">
        <p onClick={() => setEdit({ id: item.id, value: item.text, eagerness: item.eagerness })}> ✏️</p>
        <p onClick={() => handleRemove(item.id)}> 🗑️</p>
      </div>
    </div>
  ));
}

export default ToDo;
