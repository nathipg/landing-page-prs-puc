import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  HttpLink,
  from,
} from '@apollo/client';

import Home from './pages/Home';

import { Container, MainContentContainer } from './containers';

import Header from './components/Header';
import Footer from './components/Footer';

const link = from([
  new HttpLink({ uri: `${process.env.REACT_APP_BACKEND_URL}/graphql` }),
]);

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link,
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Container>
        <Header />
        <MainContentContainer>
          <Home />
        </MainContentContainer>
        <Footer />
      </Container>
    </ApolloProvider>
  );
}

export default App;
