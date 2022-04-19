import {
  CREATE_TODO,
  COMPLETE_TODO,
  REMOVE_TODO,
  LOAD_TODOS_IN_PROGRESS,
  LOAD_TODOS_SUCCESS,
  LOAD_TODOS_FAILED,
} from './actions';

export const isLoading = (state = false, action) => {
  const { type, payload } = action;

  switch (type) {
    case LOAD_TODOS_IN_PROGRESS:
      return true;

    case LOAD_TODOS_SUCCESS:
      return false;

    case LOAD_TODOS_FAILED:
      return false;

    default:
      return state;
  }
};

export const todos = (state = [], action) => {
  const { type, payload } = action;

  switch (type) {
    case CREATE_TODO: {
      const { todo } = payload;
      return [todo, ...state];
    }

    case REMOVE_TODO: {
      const { id } = payload;
      return state.filter((todo) => todo.id !== payload.id);
    }

    case COMPLETE_TODO: {
      console.log(payload);
      return state.map((todo) =>
        todo.id === payload.id ? { ...todo, completed: true } : todo
      );
    }

    case LOAD_TODOS_SUCCESS: {
      return payload.todos;
    }

    case LOAD_TODOS_FAILED: {
      return state;
    }

    case LOAD_TODOS_IN_PROGRESS: {
      return state;
    }

    default:
      return state;
  }
};
