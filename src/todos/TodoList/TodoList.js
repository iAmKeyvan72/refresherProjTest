import React from 'react';
import { connect } from 'react-redux';

import NewTodoForm from '../NewTodoForm/NewTodoForm';
import TodoListItem from '../TodoListItem/TodoListItem';
import { completeTodo, removeTodo } from '../actions';

import './TodoList.css';

const TodoList = ({ todos, removeTodo, completeTodo }) => (
  <div className="list-wrapper">
    <NewTodoForm />
    {todos.map((todo, index) => (
      <TodoListItem
        key={todo + index}
        todo={todo}
        removeTodo={removeTodo}
        completeTodo={completeTodo}
      />
    ))}
  </div>
);

const mapStateToProps = (state) => ({
  todos: state.todos,
});

const mapDispatchToProps = (dispatch) => ({
  removeTodo: (id) => dispatch(removeTodo(id)),
  completeTodo: (id) => dispatch(completeTodo(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
