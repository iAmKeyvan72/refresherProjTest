import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import NewTodoForm from '../NewTodoForm/NewTodoForm';
import TodoListItem from '../TodoListItem/TodoListItem';

import './TodoList.css';
import { completeTodoRequest, loadTodos, removeTodoRequest } from '../thunks';

const TodoList = ({
  todos,
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
    <div className="list-wrapper">
      <NewTodoForm />
      {todos.map((todo) => (
        <TodoListItem
          key={todo.id}
          todo={todo}
          removeTodo={removeTodo}
          completeTodo={completeTodo}
        />
      ))}
    </div>
  );
};

const mapStateToProps = (state) => ({
  isLoading: state.isLoading,
  todos: state.todos,
});

const mapDispatchToProps = (dispatch) => ({
  startLoadingTodos: () => dispatch(loadTodos()),
  removeTodo: (id) => dispatch(removeTodoRequest(id)),
  completeTodo: (id) => dispatch(completeTodoRequest(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
