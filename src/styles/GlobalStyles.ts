import {createGlobalStyle } from "styled-components";
import Baloo_Da_2 from '../fonts/Baloo_Da_2/BalooDa2-VariableFont_wght.ttf'
import Lemonada from '../fonts/Lemonada/Lemonada-VariableFont_wght.ttf'


const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family:'Baloo Da 2';
    src: url(${Baloo_Da_2});
  }

  @font-face {
    font-family: 'Lemonada';
    src: url(${Lemonada});
  }
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  h1,h2 {
    font-family: 'Baloo Da 2', cursive;
  }

  p {
    font-family: 'Lemonade', sans-serif;
  }
    
  img {
    display: block;
    width: 100%;
  }

  a {
    text-decoration: underline;
  }
  
`

export default GlobalStyles