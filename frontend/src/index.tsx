import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  HttpLink,
  from,
} from '@apollo/client';

import App from './App';
import GlobalStyle from './GlobalStyle';
import { theme } from './Theme';

import { ToastContextProvider } from './store/contexts/toast';
import { ClientContextProvider } from './store/contexts/clients';

import './i18n';

const link = from([
  new HttpLink({ uri: `${process.env.REACT_APP_BACKEND_URL}/graphql` }),
]);

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link,
});

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <ApolloProvider client={client}>
          <ToastContextProvider>
            <ClientContextProvider>
              <App />
            </ClientContextProvider>
          </ToastContextProvider>
        </ApolloProvider>
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
