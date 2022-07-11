import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: 'Montserrat', sans-serif;
    scroll-behavior: smooth:
  }

  @media (max-width: 1080px) {
    html {
      font-size: 93.75%;
    }
  }

  @media (max-width: 720px) {
    html {
      font-size: 87.5%;
    }
  }

  html,
  body,
  #root {
    height: 100%;
  }

  body {
    background-color: #F1F1F1;
  }

  button {
    cursor: pointer;
    border: none;
    box-shadow: none;
    background: none;
  }
`;
