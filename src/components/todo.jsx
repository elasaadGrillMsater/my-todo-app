import  React  from 'react';



const Il = ({todo,SetTodos,Todos})=> {
    //delete handler
    const deleteHandler = () => {
        SetTodos(Todos.filter(el => el.id !== todo.id ))
    }
    //completed handler
    const completedHandler = ()=>{
        SetTodos(Todos.map((item)=>{
            if(item.id === todo.id){
                return {
                    ...item,
                    completed : !item.completed
                }
            }
            return item;
        }))
    }
    
    //rendering a todo
    const cname = (todo.completed) ? "todo-item completed" : "todo-item" ;
    
    return(
        <div className="todo">
            <li className={cname}>{todo.text}</li>
            <button onClick={completedHandler} className="complete-btn"> <i className="fas fa-check"></i> </button>
            <button onClick={deleteHandler} className="trash-btn"> <i className="fas fa-trash"></i> </button>
        </div>
       
    );
}
 export default Il;