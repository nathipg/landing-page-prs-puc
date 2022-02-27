import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from 'styled-components';

import App from './App';
import GlobalStyle from './GlobalStyle';
import { theme } from './Theme';

import { ToastContextProvider } from './store/contexts/toast';

import './i18n';

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <ToastContextProvider>
        <App />
      </ToastContextProvider>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
