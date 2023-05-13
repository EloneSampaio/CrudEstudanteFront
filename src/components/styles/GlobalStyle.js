// src/components/styles/GlobalStyle.js
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Roboto', sans-serif;
    margin: 0;
    ${'' /* background-image: url(./estudantes.png);
    background-size: center;
    background-repeat: no-repeat;
    background-position: center; */}
  }

  h1 {
    font-size: 2rem;
    color: #444;
  }

  p {
    font-size: 1.1rem;
    color: #333;
  }

  button {
    background-color: #006400;
    color: white;
    font-size: 1rem;
    padding: 0.5rem 1rem;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.2s;

    &:hover {
      background-color: #064000;
    }
  }
`;

export default GlobalStyle;
