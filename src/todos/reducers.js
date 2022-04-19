import {
  CREATE_TODO,
  COMPLETE_TODO,
  REMOVE_TODO,
  LOAD_TODOS_IN_PROGRESS,
  LOAD_TODOS_SUCCESS,
  LOAD_TODOS_FAILED,
} from './actions';

const initialState = {
  data: [],
  isLoading: false,
};

export const todos = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case CREATE_TODO: {
      const { todo } = payload;
      return { ...state, data: [todo, ...state.data] };
    }

    case REMOVE_TODO: {
      const { id } = payload;
      return { ...state, data: state.data.filter((todo) => todo.id !== id) };
    }

    case COMPLETE_TODO: {
      return {
        ...state,
        data: state.data.map((todo) =>
          todo.id === payload.id ? { ...todo, completed: true } : todo
        ),
      };
    }

    case LOAD_TODOS_SUCCESS: {
      const { todos } = payload;
      return { ...state, data: todos, isLoading: false };
    }

    case LOAD_TODOS_FAILED: {
      return { ...state, isLoading: false };
    }

    case LOAD_TODOS_IN_PROGRESS: {
      return { ...state, isLoading: true };
    }

    default:
      return state;
  }
};
