import {createTodo, loadTodo , loadTodoSuccess , loadTodoFailure } from './actions'; 
console.log("thunk")
export const displayLoading = () => async(dispatch , getState) => {
    try{
        dispatch(loadTodo());
        const response = await fetch('http://localhost:8081/todos');
        const todoList = await response.json();
        console.log(todoList);
        dispatch(loadTodoSuccess(todoList))
    }catch(e){
        dispatch(loadTodoFailure())
    }
    
}

export const addTodo = text => async(dispatch , getState) => {
    try{
        const body = JSON.stringify({text})
        const response = await fetch('http://localhost:8081/todos',{
            headers: {
                'Content-Type': 'application/json',
            },
            method: 'post',
            body,
        });
        
        const todoList = await response.json();
        dispatch(createTodo(todoList))
    }catch(e){
        dispatch(displayAlert(e))
    }
    
}


export const removeTodo = id => async(dispatch , getState) => {
    try{
        const response = await fetch('http://localhost:8081/todos/'+id,{
            method: 'delete',
        });
        
        const removedTodo = await response.json();
        dispatch(removeTodo(removedTodo))
    }catch(e){
        dispatch(displayAlert(e))
    }
    
}



export const displayAlert = (text) => () =>{
    alert(text)
}