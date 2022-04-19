import React from 'react';
import Styled from 'styled-components';

import TodoList from './todos/TodoList/TodoList';

const StyledApp = Styled.div`
  margin: 1rem;
  font-family: Arial, Helvetica, sans-serif;
  color: #222222;
  width: 100vw;
  height: 100vh;
`;

const App = () => (
  <StyledApp>
    <TodoList />
  </StyledApp>
);

export default App;
