import React from 'react';
import TodoItem from './TodoItem';

const Todos = (props) => {
  return (
    <div>
      <h3 className='text-center my-4'>Todo list</h3>

       {/* <TodoItem todo = {props.todos[0]} /> */}

        {props.todos.length > 0 ? props.todos.map((todo) => (
         <>
          <TodoItem  todo={todo} key={todo.sno} onDelete = {props.onDelete} /> 
          <hr />
         </>
        )): <p className='text-center py-5'><b> No Tasks Left :) </b></p> }
    </div>
  );
}

export default Todos;

