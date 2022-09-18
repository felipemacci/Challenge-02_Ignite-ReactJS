import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    
  }

  body, input, textarea, button {
    font-family: 'Roboto', sans-serif;
    font-size: 1rem;
    font-weight: 400;
    -webkit-font-smoothing: antialised;
  }

  .container {
    display: flex;
    width: 71.4rem;
    margin: 0 auto;
    padding-left: 2%;
    padding-right: 2%;
  }
`