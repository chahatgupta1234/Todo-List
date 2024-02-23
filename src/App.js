import Header from './components/Header';
import React, { Fragment } from 'react';
import Todos from './components/Todos';
import Footer from './components/Footer';
import { useEffect, useState } from 'react';
import AddTodo from './components/AddTodo';
import About from './components/About';
import Check from './components/check';
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from 'react-router-dom';

function App() {
  let initTodo;
  if(localStorage.getItem("todo")  === null )
  initTodo = [];
else{
  initTodo = JSON.parse(localStorage.getItem("todo"))
}

  const [todo, setTodo] = useState(initTodo);

  //we use use because if we change any thing like we adding new tadk then it may take some time to add and before this time completes it executes next line 
  // like to store this tadk in local storage so it not stored and task is skipped so we use useeffect so that if there is any change in todo it first change it then execute next line.
  useEffect(()=>{
    localStorage.setItem("todo" , JSON.stringify(todo));
  }, [todo] )

  const onDelete = (x) => {
    console.log("I am onDelete ",x);
    setTodo(todo.filter((e)=>{return e !== x;}));
  }

  const addTodo = (title,desc)=>{
    // console.log("i am adding ",title,desc);
    let sno;
    if(todo.length === 0)
    sno =0;
    else
    sno =todo.length;
     let myTodo = {
      sno : sno,
      title : title,
      desc : desc
     };

     console.log(myTodo);

     setTodo([...todo , myTodo])
     localStorage.setItem("todo", JSON.stringify(todo));

  }
  
  return (
    <>
    <Router>
      <Header title="My Todo List" search = {true} /> {/*this title works as a element and can be use by object*/}
      <Routes>
         {/* <Route exact path="/" render ={()=> {
          console.log("this was displayed");
          return (
            <Fragment>
              <h1>Hello World</h1>
              <AddTodo addTodo = {addTodo} />
              <Todos todos = {todo} onDelete = {onDelete} />
            </Fragment>
          )
         }}/> */}
         <Route exact path="/" element={[<AddTodo addTodo = {addTodo} />,<Todos todos = {todo} onDelete = {onDelete} />]}/>

          <Route exact path="/about" element={[<About/>,<Check/>]}/>
          
        </Routes>
      <Footer/>
    </Router>
    </> 
  );
}
export default App;