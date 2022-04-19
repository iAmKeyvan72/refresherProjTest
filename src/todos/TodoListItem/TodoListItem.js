import React from 'react';
import './TodoListItem.css';

const TodoListItem = ({ todo, removeTodo, completeTodo }) => {
  const handleCompleteTodo = () => {
    completeTodo(todo.id);
  };

  const handleRemoveTodo = () => {
    removeTodo(todo.id);
  };

  return (
    <div className="todo-item-container">
      <h3>{todo.title}</h3>
      <div className="buttons-container">
        {!todo.completed && (
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
