import React, { useState, useEffect } from 'react';
import ToDoForm from './toDoForm';
//import { getAllToDos, removeToDo, updateToDo } from "../../../utils/toDoAPI";
import { REMOVE_TODO, UPDATE_TODO } from '../../../utils/mutations';
import { QUERY_GET_TODOS } from '../../../utils/queries';
import { useMutation, useQuery } from "@apollo/react-hooks";
import "./toDo.css";

function ToDo({ toDoList, setToDoList }) {
  const [edit, setEdit] = useState({
    id: null,
    value: '',
    eagerness: '',
    isComplete: ''
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

  const { data, loading, refetch} = useQuery(QUERY_GET_TODOS);
  const [removeToDo] = useMutation(REMOVE_TODO);
  const [updateToDo] = useMutation(UPDATE_TODO);
  
  const handleIsComplete = async(item) => {
    const { _id, text, eagerness, isComplete } = item;
    const oppositeValue = isComplete === "true" ? "false" : "true";
    try
    {
      const { data }  = await updateToDo({
        variables: { _id: _id, text: text, eagerness: eagerness, isComplete: oppositeValue } 
      });       
      const refetchData = await refetch();
      const toDoList = refetchData.data.toDos;
      setToDoList(toDoList);
    }
    catch (err) { console.log(err); }
  }

  const handleRemoveToDo = async(_id) => {
    try
    {
      const { data }  = await removeToDo({
        variables: { _id } 
      });      
      const refetchData = await refetch();
      const toDoList = refetchData.data.toDos;
      setToDoList(toDoList);      
    }
    catch (err) { console.log(err); }
  }

  if (edit.id) {
    return <ToDoForm edit={edit} setEdit={setEdit} setToDoList={setToDoList} />;
  }

  toDoList.map((item, i) => (console.log(item, i)));

  return toDoList.map((item, i) => (
    <div
      className={
        item.isComplete === "true"
          ? `bucket-row complete ${item.eagerness}`
          : `bucket-row ${item.eagerness}`
      }
      key={i}
    >      
      <div key={item._id} onClick={() => handleIsComplete(item)}>
        {item.text}
      </div>
      <div className="icons">
        <p onClick={() => setEdit({ id: item._id, value: item.text, eagerness: item.eagerness, isComplete: item.isComplete })}> ✏️</p>
        <p onClick={() => handleRemoveToDo(item._id)}> 🗑️</p>
      </div>
    </div>
  ));
}

export default ToDo;
