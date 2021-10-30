import React, { useState } from 'react';
import { CREATE_TODO, UPDATE_TODO } from '../../../utils/mutations';
import { QUERY_GET_TODOS } from '../../../utils/queries';
import { useMutation, useQuery } from "@apollo/react-hooks";
import "./toDo.css";

function ToDoForm({ setToDoList, edit, setEdit }) {
  const [input, setInput] = useState("");
  const [eagerness, setEagerness] = useState("");
 
  const eagernessLevel = ["high", "medium", "low"]
  const { data, loading, refetch} = useQuery(QUERY_GET_TODOS);
  const [createToDo] = useMutation(CREATE_TODO);
  const [updateToDo] = useMutation(UPDATE_TODO);

  const handleCreateToDo = async(event) => {
    event.preventDefault();
    try
    {
      let newEagerness = !eagerness ? "low" : eagerness;
      const { data }  = await createToDo({
        variables: { text: input, eagerness: newEagerness, isComplete: "false" } 
      });    
      const item = data.createToDo;
      const refetchData = await refetch();
      const toDoList = refetchData.data.toDos;
      setInput('');
      setEagerness('');
      setToDoList(toDoList);      
    }
    catch (err) { console.log(err); }
  }

  const handleEditToDo = async(e) => {
    e.preventDefault();
    const newEagerness = !eagerness ? edit.eagerness : eagerness;
    const newInput = !input ? edit.value : input;
    try
    {
      console.log(edit.id, newInput, newEagerness, edit.isComplete)
      const { data }  = await updateToDo({
        variables: { _id: edit.id, text: newInput, eagerness: newEagerness, isComplete: edit.isComplete } 
      });       
      const refetchData = await refetch();
      const toDoList = refetchData.data.toDos;
      setToDoList(toDoList);
      setEdit({ id: null, value: '', eagerness: '', isComplete: '' });  
    }
    catch (err) { console.log(err); }
  }

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  return !edit ? (
    <div>
      <form className="bucket-form" onSubmit={handleCreateToDo}>
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
