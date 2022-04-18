import { CREATE_TODO, COMPLETE_TODO, REMOVE_TODO } from './actions';

export const todos = (state = [], action) => {
  const { type, payload } = action;

  switch (type) {
    case CREATE_TODO: {
      return [
        ...state,
        {
          text: payload.text,
          isCompleted: false,
        },
      ];
    }

    case REMOVE_TODO: {
      return state.filter((todo) => todo.text !== payload.id);
    }

    case COMPLETE_TODO: {
      return state.map((todo) =>
        todo.text === payload.id ? { ...todo, isCompleted: true } : todo
      );
    }

    default:
      return state;
  }
};
