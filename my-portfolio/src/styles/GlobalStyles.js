import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
 *, *::before, *::after {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    padding: 0;
    font-family: 'Lato', 'Roboto Slab', sans-serif;
    background-color: #f5f5f5;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  h1, h2, h3 {
    font-family: "Lato", sans-serif;
  }

  p {
    font-family: "Roboto Slab", sans-serif;
  }
    
  a,
  a:hover {
    text-decoration: none;
    color: white;
  }
`;

export default GlobalStyles;
