import { 
     CREATE_TODO ,
     REMOVE_TODO , 
     COMPLETED_TODO,
     LOAD_TODO,
     LOAD_TODO_SUCCESSS,
     LOAD_TODO_FAILURE  }  from './actions'

console.log("reducer")     
export const isLoading = (state = false, action) => {
    const { type } = action;
    switch (type) {
        case LOAD_TODO:
            return true;
        case LOAD_TODO_SUCCESSS:
        case LOAD_TODO_FAILURE:
            return false;
        default:
            return state;
        }
}

export const todos = (state = [], action) => {
    const { type , payload } = action ;

    switch(type){
        case CREATE_TODO:{
            const { todo } = payload;
            return state.concat(todo)
        }
        case REMOVE_TODO : {
            const { todo : removedTodo } = payload;
            return state.filter(todo => todo.id != removedTodo.id);

        }
        case COMPLETED_TODO : {
            const { text } = payload;
            return state.map(todo => {
                if(todo.text == text){
                    return { ...todo , isCompleted : true }; 
                }
                return todo;
            });
        }
        case LOAD_TODO_SUCCESSS : {
            const { todos } = payload;
            return todos;
        }
        case LOAD_TODO : 
        case LOAD_TODO_FAILURE : 
        default : 
         return state;
    }
  //  return state;
}