import React, { useContext } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';

import { Container, MainContentContainer } from './containers';

import Header from './components/Header';
import Footer from './components/Footer';
import Loading from './components/Loading';
import Toast from './components/Toast';

import ToastContext from './store/contexts/toast';

const LazyHome = React.lazy(() => import('./pages/Home'));
const LazyClients = React.lazy(() => import('./pages/Clients'));

function App() {
  const toastCtx = useContext(ToastContext);

  return (
    <Container>
      <Header />

      {toastCtx.toast.isVisible && (
        <Toast
          status={toastCtx.toast.status}
          message={toastCtx.toast.msg}
          hideHandler={toastCtx.hideHandler}
        />
      )}

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
  );
}

export default App;
