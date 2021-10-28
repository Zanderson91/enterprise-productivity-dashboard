import React, { useState, useEffect } from 'react';
import ToDoForm from './toDoForm';
import { getAllToDos, removeToDo, updateToDo } from "../../../utils/toDoAPI";
import "./toDo.css";

function ToDo({ toDoList, setToDoList }) {
  const [edit, setEdit] = useState({
    id: null,
    value: '',
    eagerness: '',
  });
  const [itemToUpdate, setItemToUpdate] = useState({
    id: null,
    text: "",
    eagerness: "",
    isComplete: "",
  });
  const [itemID, setItemID] = useState(0);
  const [removeClickState, setRemoveClickState] = useState(false);
  const [isCompleteClickState, setIsCompleteClickState] = useState(false);

  useEffect(() => {
    if (removeClickState) {
      const removeToDoItem = async() => {
        await removeToDo(itemID);
        const allToDos = await getAllToDos();
        setToDoList(allToDos);
      }
      removeToDoItem();
      setRemoveClickState(false);
    }
  },[removeClickState]); 
  
  useEffect(() => {
    if (isCompleteClickState) {
      const CI = async() => {
        const item = {
          id: itemToUpdate.id,
          text: itemToUpdate.text,
          eagerness: itemToUpdate.eagerness,
          isComplete: itemToUpdate.isComplete
        };
        await updateToDo(item);
        const allToDos = await getAllToDos();
        setToDoList(allToDos);        
      }
      CI();
      setIsCompleteClickState(false);
    }
  },[isCompleteClickState]); 

  const handleRemove = (id) => {
    setRemoveClickState(true);
    setItemID(id);
  };

  const handleIsComplete = (item) => {
    const oppositeValue = item.isComplete === "true" ? "false" : "true";
    setItemToUpdate({
      id: item.id,
      text: item.text,
      eagerness: item.eagerness,
      isComplete: oppositeValue
    });
    setIsCompleteClickState(true);
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
