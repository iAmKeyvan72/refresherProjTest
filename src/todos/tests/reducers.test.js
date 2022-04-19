import { expect } from 'chai';
import { todos } from '../reducers';

describe('The todos reducer', () => {
  it('Adds a new todo when CREATE_TODO action is recieved', () => {
    const fakeTodo = {
      title: 'Here is fake todo',
      useId: 3,
      completed: false,
    };
    const fakeAction = {
      type: 'CREATE_TODO',
      payload: { todo: fakeTodo },
    };
    const expected = {
      data: [fakeTodo],
      isLoading: false,
    };
    const initialState = {
      data: [],
      isLoading: false,
    };
    const actual = todos(initialState, fakeAction);

    expect(actual).to.deep.equal(expected);
  });
});
