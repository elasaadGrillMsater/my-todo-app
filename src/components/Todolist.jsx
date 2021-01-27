import React from 'react'
import Il from './todo';

const Todolist = ({Todos,SetTodos,filter}) => {
return(
    <div className="todo-container">
        <ul className="todo-list">
            {filter.map((todo)=> <Il SetTodos={SetTodos} Todos={Todos} todo={todo} key={todo.id}/>)}
        </ul>
        
    </div>
);
}
export default Todolist;