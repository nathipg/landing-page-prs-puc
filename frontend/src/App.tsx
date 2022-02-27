import React, { useContext } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  HttpLink,
  from,
} from '@apollo/client';

import { Container, MainContentContainer } from './containers';

import Header from './components/Header';
import Footer from './components/Footer';
import Loading from './components/Loading';
import Toast from './components/Toast';

import ToastContext from './store/contexts/toast';

const LazyHome = React.lazy(() => import('./pages/Home'));
const LazyClients = React.lazy(() => import('./pages/Clients'));

const link = from([
  new HttpLink({ uri: `${process.env.REACT_APP_BACKEND_URL}/graphql` }),
]);

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link,
});

function App() {
  const { toast } = useContext(ToastContext);

  return (
    <ApolloProvider client={client}>
      <Container>
        <Header />

        {toast.isVisible && <Toast />}

        <MainContentContainer>
          <React.Suspense fallback={<Loading />}>
            <Routes>
              <Route path="/clients" element={<LazyClients />} />
              <Route path="/" element={<LazyHome />} />
              <Route path="*" element={<Navigate replace to="/" />} />
            </Routes>
          </React.Suspense>
        </MainContentContainer>
        <Footer />
      </Container>
    </ApolloProvider>
  );
}

export default App;
