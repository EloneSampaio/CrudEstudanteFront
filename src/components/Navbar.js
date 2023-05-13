// src/components/Navbar.js
import React from 'react';
import styled from 'styled-components';

const Nav = styled.nav`
  width: 100%;
  padding: 10px;
  background-color: #00ff7f;
`;

const NavList = styled.ul`
  list-style: none;
  display: flex;
  justify-content: flex-start;
  gap: 4rem;
  padding-left: 20px;
  margin: 10px;
`;

const Navbar = ({ onNavigate }) => {
  return (
    <Nav>
      <NavList>
        <li>
          <button onClick={() => onNavigate('home')}>Tela Inicial</button>
        </li>
        <li>
          <button onClick={() => onNavigate('students')}>Estudantes</button>
        </li>
      </NavList>
    </Nav>
  );
};

export default Navbar;
