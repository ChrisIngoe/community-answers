import React from 'react';
import Header from './components/header';
import AppRoutes from './routes/appRoutes';
import PageContainer from './components/pageContainer';

function App() {
  return (
    <>
      <Header />
      <PageContainer>
        <AppRoutes />
      </PageContainer>
    </>
  );
}

export default App;
