import React , {useEffect} from 'react';
import ToDoListItem from './ToDoListItem';
import NewToDoForm from './NewToDoForm';
import { connect } from 'react-redux';
import {  markAsCompletedTodo, loadTodo } from './actions'
import { isLoading } from './reducers';
import { displayLoading, removeTodo} from './thunks';
console.log("ToDolist")
const ToDoList = ({todos = [] , onRemoveClick  , onMarksAsCompletedClick ,isLoading ,startLoading }) => {
   useEffect(() => {
      startLoading();
   },[])
   console.log(todos)
   const loadingMessage = <div>Loading..........</div>
   const content = (
    <div className="list-wrapper">
         <NewToDoForm/>
        {todos.map(todo => <ToDoListItem todo={todo} onRemoveClick={onRemoveClick} onMarksAsCompletedClick = {onMarksAsCompletedClick}/>)}
    </div>
   );
   return isLoading ? loadingMessage : content;
};

const mapStateToProps = state => ({
   todos : state.todos,
   isLoading : state.isLoading
});

const mapDispatchToProps = dispatch => ({
  startLoading: () => dispatch(displayLoading()), 
  onRemoveClick: id =>dispatch(removeTodo(id)),
  onMarksAsCompletedClick : text=>dispatch(markAsCompletedTodo(text)) 
});


export default connect(mapStateToProps , mapDispatchToProps)(ToDoList)