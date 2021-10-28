import React, { useEffect, useState } from 'react';
import ToDoForm from "./toDoForm";
import ToDo from "./toDo";
import { getAllToDos } from "../../../utils/toDoAPI";
import "./toDo.css";

function ToDoList() {
  //todoList is an array of objects
  const [toDoList, setToDoList] = useState([]);

  // Grabs all the TODOs on page load
  // useEffect(() =>{
  //   if (toDoList.length === 0)
  //   {
  //     const fillToDoList = async() => {
  //       const allToDos = await getAllToDos();
  //       setToDoList(allToDos);
  //       console.log("STARTER TODO LIST", allToDos); 
  //     }
  //     fillToDoList();
  //   }
  // }, []);

  return (
    <div className="cardItem bucket-app">
      <h1>What is on your To Do list?</h1>
      <ToDoForm 
        setToDoList={setToDoList}
      />
      <ToDo
        toDoList={toDoList}
        setToDoList={setToDoList}
      ></ToDo>
    </div>
  );
}

export default ToDoList;
