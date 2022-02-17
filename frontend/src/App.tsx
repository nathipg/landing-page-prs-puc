import Home from './pages/Home';

import { Container, MainContentContainer } from './containers';

import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <Container>
      <Header />
      <MainContentContainer>
        <Home />
      </MainContentContainer>
      <Footer />
    </Container>
  );
}

export default App;
