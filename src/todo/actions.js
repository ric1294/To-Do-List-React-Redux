console.log("actions")
// action type
export const CREATE_TODO = 'CREATE_TODO'; 

//action creators

// Create To Do
export const createTodo = todo => ({
    type : CREATE_TODO,
    payload : { todo } 
})

//create remove to do
export const REMOVE_TODO = 'REMOVE_TODO';
export const removeTodo = todo => ({
    type : REMOVE_TODO,
    payload : { todo } 
})

//mark as completed to do
export const COMPLETED_TODO = 'COMPLETED_TODO';
export const markAsCompletedTodo = text => ({
    type : COMPLETED_TODO,
    payload : { text } 
})

//load todo in progress
export const LOAD_TODO = 'LOAD_TODO';
export const loadTodo = () => ({
    type : LOAD_TODO,
})

//load todo success
export const LOAD_TODO_SUCCESSS = 'LOAD_TODO_SUCCESSS';
export const loadTodoSuccess = todos => ({
    type : LOAD_TODO_SUCCESSS,
    payload: { todos },
})

//load todo success
export const LOAD_TODO_FAILURE = 'LOAD_TODO_FAILURE';
export const loadTodoFailure = () => ({
    type : LOAD_TODO_FAILURE,
})

//add new todo




