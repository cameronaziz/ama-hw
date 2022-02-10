import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: "Didot";
    src: local("Didot"),
    url("./fonts/didot-medium.ttf") format("truetype");
    font-weight: normal;
  }
  
  @font-face {
    font-family: "Didot";
    src: local("Didot"),
    url("./fonts/didot-bold.otf") format("truetype");
    font-weight: bold;
  }
`

export default GlobalStyle;
