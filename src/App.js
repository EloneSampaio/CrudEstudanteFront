// src/App.js
import React, { useState } from 'react';
import styled from 'styled-components';
import Navbar from './components/Navbar';
import StudentTable from './components/EstudanteTable';
import HomePage from './components/HomePage';
import GlobalStyle from './components/styles/GlobalStyle';

const Container = styled.div`
  
  height: 100%;
  margin: auto;
  padding: 0;
`;

const App = () => {
  const [page, setPage] = useState('home');

  const botaoNavigation = (destination) => {
    setPage(destination);
  };

  return (
    <>
      <GlobalStyle />
      <Container>
        <Navbar onNavigate={botaoNavigation} />
        {page === 'home' && <HomePage />}
        {page === 'students' && <StudentTable />}
      </Container>
    </>
  );
};

export default App;
