import React, { useState } from 'react';
import { connect } from 'react-redux';
import { getTodos } from '../selector';
import { createTodoRequest } from '../thunks';

import {
  StyledNewTodoForm,
  StyledNewTodoInput,
  StyledNewTodoButton,
} from './styles';

const NewTodoForm = ({ todos, onCreatePressed }) => {
  const [inputValue, setInputValue] = useState('');

  const handleCreateTodo = () => {
    const isNewTodo = todos.some((todo) => todo.text === inputValue);
    if (!isNewTodo) {
      onCreatePressed(inputValue);
      setInputValue('');
    } else {
      alert('Todo already exists');
      setInputValue('');
    }
  };

  return (
    <StyledNewTodoForm>
      <StyledNewTodoInput
        type="text"
        placeholder="Type your new todo here"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <StyledNewTodoButton onClick={handleCreateTodo}>
        Create Todo
      </StyledNewTodoButton>
    </StyledNewTodoForm>
  );
};

const mapStateToProps = (state) => ({
  todos: getTodos(state),
});

const mapDispatchToProps = (dispatch) => ({
  onCreatePressed: (text) => dispatch(createTodoRequest(text)),
});

export default connect(mapStateToProps, mapDispatchToProps)(NewTodoForm);
