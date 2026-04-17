import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  :root {
    --main-bg-color: #eef2f6;

    /* Variáveis do toast */
    --toastify-color-light: #fff;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html, body {
    background-color: var(--main-bg-color);
  }
`;
