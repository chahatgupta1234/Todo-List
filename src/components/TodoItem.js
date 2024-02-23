import React from 'react'

const TodoItem = ({todo, onDelete}) => {
  return (
    <div className='my-2 container'>
      <h4>{todo.title}</h4>
      <p>{todo.desc}</p>
      <button className="btn btn-danger btn-sm" onClick={() => {onDelete(todo)}}> Delete </button>
    </div>
  );
}

export default TodoItem;

