import 'node-fetch';
import fetchMock from 'fetch-mock';
import { expect } from 'chai';
import sinon from 'sinon';

import { loadTodos } from '../thunks';

describe('The loadTodos thunk', () => {
  it('Dispatches the correct actions in the success scenario', async () => {
    const fakeDispatch = sinon.spy();

    const fakeTodos = [
      {
        title: 'Fake todo',
        completed: false,
        id: 1,
      },
      {
        title: 'Hoy todo',
        completed: true,
        id: 2,
      },
    ];

    fetchMock.get('https://jsonplaceholder.typicode.com/todos', fakeTodos);

    const expectedFirstAction = {
      type: 'LOAD_TODOS_IN_PROGRESS',
    };
    const expectedSecondAction = {
      type: 'LOAD_TODOS_SUCCESS',
      payload: { todos: fakeTodos },
    };

    await loadTodos()(fakeDispatch);

    fetchMock.reset();

    expect(fakeDispatch.getCall(0).args[0]).to.deep.equal(expectedFirstAction);
    expect(fakeDispatch.getCall(1).args[0]).to.deep.equal(expectedSecondAction);
  });
});
