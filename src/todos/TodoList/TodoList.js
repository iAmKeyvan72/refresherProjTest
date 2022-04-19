import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import NewTodoForm from '../NewTodoForm/NewTodoForm';
import TodoListItem from '../TodoListItem/TodoListItem';

import { StyledListWrapper } from './styles';

import { completeTodoRequest, loadTodos, removeTodoRequest } from '../thunks';
import {
  getTodosLoading,
  getCompletedTodos,
  getIncompleteTodos,
} from '../selector';

const TodoList = ({
  incompleteTodos,
  completeTodos,
  removeTodo,
  completeTodo,
  isLoading,
  startLoadingTodos,
}) => {
  useEffect(() => {
    startLoadingTodos();
  }, []);

  if (isLoading) return <div>Loading ...</div>;

  return (
    <StyledListWrapper>
      <NewTodoForm />
      <h3>Incomplete:</h3>
      {incompleteTodos.map((todo) => (
        <TodoListItem
          key={todo.id}
          todo={todo}
          removeTodo={removeTodo}
          completeTodo={completeTodo}
        />
      ))}
      <hr />
      <h3>Complete:</h3>
      {completeTodos.map((todo) => (
        <TodoListItem
          key={todo.id}
          todo={todo}
          removeTodo={removeTodo}
          completeTodo={completeTodo}
        />
      ))}
    </StyledListWrapper>
  );
};

const mapStateToProps = (state) => ({
  completeTodos: getCompletedTodos(state),
  incompleteTodos: getIncompleteTodos(state),
  isLoading: getTodosLoading(state),
});

const mapDispatchToProps = (dispatch) => ({
  startLoadingTodos: () => dispatch(loadTodos()),
  removeTodo: (id) => dispatch(removeTodoRequest(id)),
  completeTodo: (id) => dispatch(completeTodoRequest(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
