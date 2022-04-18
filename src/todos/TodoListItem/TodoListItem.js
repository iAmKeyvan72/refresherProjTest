import React from 'react';
import './TodoListItem.css';

const TodoListItem = ({ todo, removeTodo, completeTodo }) => {
  const handleCompleteTodo = () => {
    completeTodo(todo.text);
  };

  const handleRemoveTodo = () => {
    removeTodo(todo.text);
  };

  return (
    <div className="todo-item-container">
      <h3>{todo.text}</h3>
      <div className="buttons-container">
        {!todo.isCompleted && (
          <button className="completed-button" onClick={handleCompleteTodo}>
            Mark As Completed
          </button>
        )}
        <button className="remove-button" onClick={handleRemoveTodo}>
          Remove
        </button>
      </div>
    </div>
  );
};

export default TodoListItem;
