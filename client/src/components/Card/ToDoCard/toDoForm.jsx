import React, { useState, useEffect } from 'react';
import { createToDo, getAllToDos } from "../../../utils/toDoAPI";
import "./toDo.css";

function ToDoForm({ setToDoList, edit, setEdit }) {
  const [input, setInput] = useState('');
  let [eagerness, setEagerness] = useState('');
  const [toDoItem, setToDoItem] = useState({
    id: null,
    text: "",
    eagerness: ""
  });

  const [addBtnIsClicked, setAddBtnIsClicked] = useState(false);
  const [editBtnIsClicked, setEditBtnIsClicked] = useState(false);

  const eagernessLevel = ['high', 'medium', 'low']

  /*
    Object { _id: "617765001530ee8ddcc44fc6", id: 0.42263534701920225, text: "together", eagerness: "low", __v: 0 }
        _id: "617765001530ee8ddcc44fc6"
        eagerness: "low"
        id: 0.42263534701920225
        text: "together"
  */ 

  useEffect(() => {
    if (addBtnIsClicked) {
      const addToDoItem = async() => {
        console.log("YOU ARE AT CREATE TODO");
        await createToDo(toDoItem);
        const allToDos = await getAllToDos();
        setToDoList(allToDos);
        console.log(`TODO LIST AFTER ADDING ${toDoItem.text}`, allToDos);        
      }
      addToDoItem();
      setAddBtnIsClicked(false);
    }
  },[addBtnIsClicked])

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!eagerness) {
      eagerness = 'low';
    }
    setToDoItem({
      id: Math.random(Math.floor() * 1000),
      text: input,
      eagerness: eagerness,      
    });
    setAddBtnIsClicked(true);    
    setInput('');
    setEagerness('');
  };

  useEffect(() => {
    if (editBtnIsClicked) {
      const EI = async() => {
        //await removeToDo(itemID);
        //const allToDos = await getAllToDos();
        //props.setToDoList(allToDos);
        //console.log(`TODO LIST AFTER REMOVING ${itemID}`, allToDos); 
        console.log("INSIDE EDIT USE EFFECT");       
      }
      EI();      
      setEditBtnIsClicked(false);
      setEdit({ id: null, value: '', eagerness: '' });
    }
  },[editBtnIsClicked]);

  const handleEdit = (e) => {
    e.preventDefault();

    console.log("INSIDE IN FORM HANDLE EDIT");
    console.log("BEFORE VALUES", edit);

    if (!eagerness) { setEagerness(edit.eagerness) };
    if (!input) { setInput(edit.value) };

    const item = {
      id: 23,
      text: "Dummy Item",
      eagerness: "VERY HIGH"
    };

    setToDoItem(item);

    console.log("AFTER VALUES", toDoItem);

    // setAddBtnIsClicked(true);    
    // setInput('');
    // setEagerness('');
  };

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  // First we check to see if "edit" prop exists. If not, we render the normal form
  // If the prop "edit" exists, we know to render the update form instead
  return !edit ? (
    <div>
      <form className="bucket-form" onSubmit={handleSubmit}>
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
      <form className="bucket-form" onSubmit={handleEdit}>
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
