import React, { useState } from 'react';
import ToDoForm from "./toDoForm";
import ToDo from "./toDo";
import { QUERY_GET_TODOS } from '../../../utils/queries';
import { useQuery } from "@apollo/react-hooks";
import "./toDo.css";

function ToDoList() {
  //todoList is an array of objects
  const [toDoList, setToDoList] = useState([]);
  
  return (
    <div className="cardItem bucket-app">
      <h1>What is on your To Do list?</h1>
      <ToDoForm 
        setToDoList={setToDoList}
      />
      <ToDo
        toDoList={toDoList}
        setToDoList={setToDoList}
      />
    </div>
  );
}

export default ToDoList;
