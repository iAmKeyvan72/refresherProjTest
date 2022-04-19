const TODOS_URL = 'https://jsonplaceholder.typicode.com/todos';

import {
  loadTodosFailed,
  loadTodosInProgress,
  loadTodosSuccess,
  createTodo,
  removeTodo,
  completeTodo,
} from './actions';

export const loadTodos = () => async (dispatch, getState) => {
  dispatch(loadTodosInProgress());
  try {
    const response = await fetch(TODOS_URL);
    const todos = await response.json();
    dispatch(loadTodosSuccess(todos));
  } catch (error) {
    dispatch(loadTodosFailed());
    // dispatch(displayAlert(error.message));
  }
};

export const createTodoRequest = (title) => async (dispatch, getState) => {
  try {
    const response = await fetch(TODOS_URL, {
      method: 'POST',
      body: JSON.stringify({
        title,
        useId: 3,
        completed: false,
      }),
      headers: {
        'Content-Type': 'application/json; charset=UTF-8',
      },
    });
    const data = await response.json();
    dispatch(createTodo(data));
  } catch (error) {
    dispatch(loadTodosFailed());
    dispatch(displayAlert(error.message));
  }
};

export const removeTodoRequest = (id) => async (dispatch, getState) => {
  try {
    const response = await fetch(`${TODOS_URL}/${id}`, { method: 'DELETE' });
    dispatch(removeTodo(id));
  } catch (error) {
    dispatch(loadTodosFailed());
    dispatch(displayAlert(error.message));
  }
};

export const completeTodoRequest = (id) => async (dispatch, getState) => {
  try {
    const response = await fetch(`${TODOS_URL}/${id}`, {
      method: 'PUT',
      body: JSON.stringify({
        id,
        completed: true,
        headers: { 'Content-Type': 'application/json; charset=UTF-8' },
      }),
    });
    const data = await response.json();
    dispatch(completeTodo(data.id));
  } catch (error) {
    dispatch(loadTodosFailed());
    dispatch(displayAlert(error.message));
  }
};

export const displayAlert = (message) => {
  alert(message);
};
