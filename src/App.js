import './App.css';
import React,{ useState, useEffect  } from 'react';
//homemade component
import Form from './components/form';
import Todolist from './components/Todolist';


function App() {
  //states
  const [inputText , SetInputText]= useState("");
  const [Todos , SetTodos]= useState([]);
  const [status, SetStatus]= useState('all');
  const [filter, SetFilter]= useState([]);
  
  //effect
  useEffect(()=>{
                //filter handler
                const filterHandler = ()=>{
                  switch(status){
                    case "completed":
                      SetFilter(Todos.filter(todo => todo.completed));
                      break;
                    case "uncompleted":
                      SetFilter(Todos.filter(todo => !todo.completed));
                      break;
                    default :
                      SetFilter(Todos);
                      break;
                  }
              }
              
              filterHandler();
              },[Todos,status])


  
  

  return (
    <div className="App">
      <header className="App-header">
       <h5>
         M'hammed's To do List 
       </h5>
      </header>
      <Form inputText={inputText} SetInputText={SetInputText} Todos={Todos} SetTodos={SetTodos} SetStatus={SetStatus} />
      <Todolist Todos={Todos} SetTodos={SetTodos} filter={filter} />
    </div>
  );
}

export default App;
