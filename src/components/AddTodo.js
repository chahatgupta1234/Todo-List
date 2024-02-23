import React from 'react'
import { useState } from 'react';


const AddTodo = ({addTodo}) => { // here we take addTodo from destructuring type or we can take it by props also by props.addTodo
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");

    const submit = (e)=>{
            e.preventDefault();
            if(!title || !desc )
            {
                alert("Title or Decription can not be empty")
                return ;
            }

            addTodo(title, desc);
            setDesc("");
            setTitle(""); 
            
        }


  return (
    
    <form className='container'>
    <h3 className='text-center my-2'>Add Tasks</h3>
  <div className="mb-3">
    <label htmlFor="title" className="form-label">Title of Task</label>
    <input type="text" value = {title} onChange={(e)=>{setTitle(e.target.value)}} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
  </div>
  <div className="mb-3">
    <label htmlFor="desc" className="form-label">Description</label>
    <input type="text" value={desc} onChange={(e)=>{setDesc(e.target.value)}} className="form-control" id="exampleInputPassword1"/>
  </div>
 
  <button type="submit" className="btn btn-sm btn-success" onClick={submit}>Add Task</button>
</form>
  )
}

export default AddTodo
