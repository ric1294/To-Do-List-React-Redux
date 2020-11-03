import React , {useState } from 'react';
import { connect } from 'react-redux';
//import { createTodo } from './actions'
import { addTodo } from './thunks';

import './ToDoListItem.css'
const NewToDoForm = ({todos , onCreateClick}) => {
    const [InputValue , setInputValue] = useState('')
    return (
    <div className="new-todo-form">
        <input type="text" 
               className="new-todo-input"
               placeholder ="Type your new to do task"
               value={InputValue}
               onChange={e=>setInputValue(e.target.value)}>

        </input>
        <button 
         onClick = {() => {
             onCreateClick(InputValue)
             setInputValue('')
         }}
        className="new-todo-button">Add ToDo</button>
    </div>
    );
};

const mapStateToProps = state => ({
    todos : state.todos
});

const mapDispatchToProps = dispatch => ({
   onCreateClick: text =>dispatch(addTodo(text))
});


export default connect(mapStateToProps , mapDispatchToProps)(NewToDoForm);