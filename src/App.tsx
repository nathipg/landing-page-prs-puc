import Home from './pages/Home';

import { Container } from './containers';

import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <Container>
      <Header />
      <Home />
      <Footer />
    </Container>
  );
}

export default App;
