// src/components/HomePage.js
import React from 'react';
import { styled } from 'styled-components';

const Div = styled.div`
  display: flex;
  flex-direction: column;
  justify-content:center;
  align-items: center;
  background-color: #00ff7f;
  width: 50%;
  margin: 6rem 16rem;
  padding: 3rem;
  border: none;
  border-radius: 1rem;
  box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
`

const H1 = styled.div`
  color: #006400;
  font-size: 2rem;
  font-weight: 800;
  padding: 1rem;
`
const P = styled.div`
  color: #006400;
  font-size: 1.4rem;
  padding: 1rem;
`

const HomePage = () => {
  return (

    <Div>
      <H1>Bem-vindo à Tela Inicial!</H1>
      <P>Selecione uma opção no menu para começar.</P>  
    </Div>
  
  );
};

export default HomePage;
