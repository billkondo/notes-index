import React from 'react';
import { createGlobalStyle } from 'styled-components';
import AppRouter from './Router';

import { defaultFont, colorBlack } from '../styles/defaultStyles';

const GlobalStyle = createGlobalStyle`
  div {
    font-family: ${defaultFont};
    color: ${colorBlack}; 
  }
`;

const App = () => (
  <React.Fragment>
    <AppRouter />
    <GlobalStyle />
  </React.Fragment>
);

export default App;
