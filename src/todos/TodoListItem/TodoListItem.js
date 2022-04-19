import React from 'react';
import {
  StyledButtonsContainer,
  StyledMarkAsCompleteButton,
  StyledRemoveTodoButton,
  StyledTodoListItem,
} from './styles';

const TodoListItem = ({ todo, removeTodo, completeTodo }) => {
  const handleCompleteTodo = () => {
    completeTodo(todo.id);
  };

  const handleRemoveTodo = () => {
    removeTodo(todo.id);
  };

  return (
    <StyledTodoListItem>
      <h3>{todo.title}</h3>
      <StyledButtonsContainer>
        {!todo.completed && (
          <StyledMarkAsCompleteButton onClick={handleCompleteTodo}>
            Mark As Completed
          </StyledMarkAsCompleteButton>
        )}
        <StyledRemoveTodoButton onClick={handleRemoveTodo}>
          Remove
        </StyledRemoveTodoButton>
      </StyledButtonsContainer>
    </StyledTodoListItem>
  );
};

export default TodoListItem;
