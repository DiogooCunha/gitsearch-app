import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  :root {
    --main-bg-color: #010409;
    --github-green: #238636;
    --github-green-hovered: #1f7b32;

    /* Variáveis do toast */
    --toastify-color-light: #fff;
  }
  
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;

    font-family: Figtree, sans-serif
  }

  html, body {
    background-color: var(--main-bg-color);
    color: #fff
  }
`;
