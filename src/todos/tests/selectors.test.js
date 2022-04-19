import { expect } from 'chai';

import { getCompletedTodos } from '../selector';

describe('The getCompletedTodos selector', () => {
  it('Returns only completed todos', () => {
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
      {
        title: 'United Here',
        completed: false,
        id: 3,
      },
    ];

    const expected = [
      {
        title: 'Hoy todo',
        completed: true,
        id: 2,
      },
    ];

    const actual = getCompletedTodos.resultFunc(fakeTodos);

    expect(actual).to.deep.equal(expected);
  });
});
