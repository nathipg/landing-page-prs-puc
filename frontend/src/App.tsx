import { useContext } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  HttpLink,
  from,
} from '@apollo/client';

import Home from './pages/Home';
import Clients from './pages/Clients';

import { Container, MainContentContainer } from './containers';

import Header from './components/Header';
import Footer from './components/Footer';
import Toast from './components/Toast';

import ToastContext from './store/contexts/toast';

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
          <Routes>
            <Route path="/clients" element={<Clients />} />
            <Route path="/" element={<Home />} />
            <Route path="*" element={<Navigate replace to="/" />} />
          </Routes>
        </MainContentContainer>
        <Footer />
      </Container>
    </ApolloProvider>
  );
}

export default App;
