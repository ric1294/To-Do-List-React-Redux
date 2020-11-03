import React from 'react';
console.log("ToDolistItem")
const ToDoListItem = ({todo , onRemoveClick , onMarksAsCompletedClick}) => {
    console.log(todo)
    return (
    <div className="todo-item-container">
        <h3>{todo.text}</h3>
        <div className="buttons-container">
            {todo.isCompleted ? null : <button className="completed"
             onClick={() => onMarksAsCompletedClick(todo.text)}>Mark as Completed</button> }
            <button className="removed" id={todo.id}
            onClick={() => onRemoveClick(todo.id)}>Remove</button>
        </div>
    </div>
    );
};

export default ToDoListItem
