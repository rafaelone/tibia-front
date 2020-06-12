import { createGlobalStyle } from 'styled-components';

import backgroundWeb from '../assets/background/backgroundWeb.jpg';

export default createGlobalStyle`
  * {
   margin: 0;
   padding: 0;
   box-sizing: border-box;
   outline: 0
 }
 body {
   background: #312e38;
   color: #fff;
   -webkit-font-smoothing: antialiased;

   background: url(${backgroundWeb}) no-repeat center;
   height: 100vh;
   background-size:cover;
 }
 body, input, button {
   font-family: 'Roboto', serif;
   font-size: 16px;
 }
 h1,h2,h3,h4,h5,h6, strong {
   font-weight: 500
 }
 button {
   cursor: pointer;
 }


`;
