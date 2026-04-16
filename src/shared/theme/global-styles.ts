import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  :root {
    --main-bg-color: #eef2f6;
  }

  *, html, body {
    background-color: var(--main-bg-color);
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`;
