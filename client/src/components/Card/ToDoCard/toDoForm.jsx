import React, { useState, useEffect } from 'react';
import { createToDo, getAllToDos, updateToDo } from "../../../utils/toDoAPI";
import "./toDo.css";

function ToDoForm({ setToDoList, edit, setEdit }) {
  const [input, setInput] = useState("");
  const [eagerness, setEagerness] = useState("");
  const [toDoItem, setToDoItem] = useState({
    id: null,
    text: "",
    eagerness: "",
    isComplete: "false"
  });
  const [addBtnIsClicked, setAddBtnIsClicked] = useState(false);
  const [editBtnIsClicked, setEditBtnIsClicked] = useState(false);
  const eagernessLevel = ["high", "medium", "low"]

  useEffect(() => {
    if (addBtnIsClicked) {
      const addToDoItem = async() => {
        console.log(toDoItem)
        await createToDo(toDoItem);
        const allToDos = await getAllToDos();
        setToDoList(allToDos);
      }
      addToDoItem();
      setAddBtnIsClicked(false);
    }
  },[addBtnIsClicked, toDoItem])

  useEffect(() => {
    if (editBtnIsClicked) {
      const editToDoItem = async() => {
        // const item = {
        //   id: edit.id,
        //   text: toDoItem.text,
        //   eagerness: toDoItem.eagerness,
        //   isComplete: toDoItem.isComplete 
        // }
        // await updateToDo(item);
        // const allToDos = await getAllToDos();
        // setToDoList(allToDos);
        // setEdit({ id: null, value: '', eagerness: '' });               
      }
      editToDoItem();      
      setEditBtnIsClicked(false);
    }
  },[editBtnIsClicked]);

  const handleAddToDo = (e) => {
    e.preventDefault();
    let newEagerness = !eagerness ? "low" : eagerness;
    setToDoItem({
      id: Math.random(Math.floor() * 1000),
      text: input,
      eagerness: newEagerness,
      isComplete: "false"    
    })
    setAddBtnIsClicked(true);    
    setInput('');
    setEagerness('');
  };

  const handleEditToDo = (e) => {
    e.preventDefault();
    const newEagerness = !eagerness ? edit.eagerness : eagerness;
    const newInput = !input ? edit.value : input;
    setToDoItem({
      id: Math.random(Math.floor() * 1000),
      text: newInput,
      eagerness: newEagerness,
      isComplete: "false"      
    })
    setEditBtnIsClicked(true);
    setInput('');
    setEagerness('');    
  };

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  return !edit ? (
    <div>
      <form className="bucket-form" onSubmit={handleAddToDo}>
        <input
          type="text"
          placeholder="Add to your bucket list"
          value={input}
          name="text"
          className="bucket-input"
          onChange={handleChange}
        ></input>
        <div className="dropdown">
          <button className={`dropbtn ${eagerness}`}>
            {eagerness || 'Priority'}
          </button>
          <div className="dropdown-content">
            <p onClick={() => setEagerness(eagernessLevel[0])}>Must do</p>
            <p onClick={() => setEagerness(eagernessLevel[1])}>Want to do</p>
            <p onClick={() => setEagerness(eagernessLevel[2])}>Take it or leave it</p>
          </div>
        </div>
        <button className="bucket-button">Add to do list item</button>
      </form>
    </div>
  ) : (
    <div>
      <h3>Update entry: {edit.value}</h3>
      <form className="bucket-form" onSubmit={handleEditToDo}>
        <input
          type="text"
          placeholder={edit.value}
          value={input}
          name="text"
          className="bucket-input"
          onChange={handleChange}
        ></input>
        <div className="dropdown">
          <button className={`dropbtn ${eagerness}`}>
            {eagerness || 'Priority'}
          </button>
          <div className="dropdown-content">
            <p onClick={() => setEagerness(eagernessLevel[0])}>Must do</p>
            <p onClick={() => setEagerness(eagernessLevel[1])}>Want to do</p>
            <p onClick={() => setEagerness(eagernessLevel[2])}>Take it or leave it</p>
          </div>
        </div>
        <button className="bucket-button">Update</button>
      </form>
    </div>
  );
}

export default ToDoForm;
