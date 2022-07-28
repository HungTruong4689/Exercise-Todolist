
import './App.css';
import React, {useState} from 'react';

import TodoItem from './TodoItem';


import AddNewItem from './AddNewItem';
import Footer from './Footer';
function App() {
  const [todoList, settodoList] = useState([]);
  const addTodoHandler = (uTitle,uDeadline,uStatus) =>{

    //Child key error
    settodoList((pretodolist) =>{
      return [...pretodolist, {title:uTitle, deadline:uDeadline, status: uStatus, id:Math.random().toString()}]
    });
  }
  
  return (
    <div className="App">
      
      <AddNewItem onAddTodolist={addTodoHandler}/>
      
      
        {todoList.map(item => (<TodoItem title={item.title} deadline={item.deadline} key={item.id} status={item.status} />))}
      
      
      
      <Footer/>
    </div>
  );
}

export default App;
