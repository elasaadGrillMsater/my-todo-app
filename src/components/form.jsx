import React from 'react'


 const Form = ({SetInputText,SetTodos,inputText,Todos,SetStatus}) => {
     //input text handler
    const InputTextHandler= (e) =>{
        SetInputText(e.target.value);
    }
    //todos handler
    const TodosHandler = (e) =>{
        e.preventDefault();
        SetTodos([
            ...Todos,
            {
                text : inputText , 
                completed : false,
                id : Math.random() * 1000,
            }
        ]
        );
        SetInputText('');
    }
    //status handler
    const statusHandler = (e) => {
        SetStatus(e.target.value);
    }
    
    return(
        <form>
            <input value={inputText} onChange={InputTextHandler} type="text" className="todo-input" />
            <button onClick={TodosHandler} className="todo-button" type="submit">
                <i className="fas fa-plus-square"></i>
            </button> 
            <div className="select">
                <select onChange={statusHandler} name="todos" className="filter-todo">
                <option value="all">All</option>
                <option value="completed">Completed</option>
                <option value="uncompleted">Uncompleted</option>
                </select>
            </div>
            <br/>
            <p>on referesh the list will be gone !!</p>
        </form>
    );
}
export default Form;