import { createGlobalStyle } from 'styled-components';

import FredokaOne from './assets/fonts/FredokaOne-Regular.ttf';
import Rajdhani from './assets/fonts/Rajdhani-Bold.ttf';
import Raleway from './assets/fonts/Raleway-Bold.ttf';
import Hind from './assets/fonts/Hind-Medium.ttf';

export const GlobalStyle = createGlobalStyle`    

  @font-face {
    font-family: 'FredokaOne';
    src: url(${FredokaOne});
  }

  @font-face {
    font-family: 'Hind';
    src: url(${Hind});
  }

  @font-face {
    font-family: 'Rajdhani';
    src: url(${Rajdhani});
  }

  @font-face {
    font-family: 'Raleway';
    src: url(${Raleway});
  }
  
  html {
    height: 100%;
  }

  body {
    height: 100%;
    margin 0px;
    font-family: "Hind";
    font-size: 16px;
    font-weight: 300;
    line-height: 1.7;
    overflow-x: hidden;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    display: flex;
    flex-direction: column;
    background-color:  ${(props) => props.theme.bg};
    color:  ${(props) => props.theme.bg};

    &::-webkit-scrollbar-track {
      background-color:  ${(props) => props.theme.paper};
    }

    &::-webkit-scrollbar {
        background-color:  ${(props) => props.theme.paper};
    }

    &::-webkit-scrollbar-thumb {
        background-color: ${(props) => props.theme.primary};
    }
  }

  #__next,
  .main {
      display: flex;
      flex-direction: column;
      height: 100%;
      flex:1;
  }
  #__react-alert__ div{
    pointer-events: unset !important;
    bottom: 50px !important;
  }
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
      color: ${(props) => props.text1};
      font-family: "Raleway", sans-serif;
      font-weight: 700;
      margin: 20px 0;
      transition: all 0.6s ease-in-out 0s;
  }

`;

export const theme = {
  primary: '#025373',
  secondary: '#2989B3',
  tertiary: '#fff',
  bg: '#FBFBFB',
  paper: '#DEE7F3',
  text1: '#0D212C',
  text2: '#5E5C7F',
  text3: '#8f919e',
  error: '#F24B6A',
  success: '#12805c',
  info: '#3498DB',
  code: 'rgb(6, 9, 64)',
  transparency: 'rgba(0, 0, 0, 0.2)',
  shadow: '0px 5px 15px -1px rgba(2, 83, 115, .2)',
};


export const device = {
  // Extra small devices (portrait phones, less than 576px)
  xs: '(max-width: 575.98px)',
  // Small devices (landscape phones, 576px and up)
  sm: '(min-width: 576px) and (max-width: 767.98px)',
  // Medium devices (tablets, 768px and up)
  md: '(min-width: 768px) and (max-width: 991.98px)',
  // Large devices (desktops, 992px and up)
  lg: '(min-width: 992px) and (max-width: 1199.98px)',
  // Extra large devices (large desktops, 1200px and up)
  xl: '(min-width: 1200px) and (max-width: 1440px)',
  // Double Extra large devices (High res, 1200px and up)
  xxl: '(min-width: 1440px)',
  // behaviour for touch browsers
  mobile: '(hover: none)',
  // behaviour for non touch browsers
  web: 'not all and (hover: none)',

  // Combinations
  xs_sm: '(max-width: 767.98px)',
  xs_lg: '(max-width: 1199.98px)',
  sm_lg: '(min-width: 576px) and (max-width: 1199.98px)',
  xs_md: '(max-width: 991.98px)',
  md_xxl: '(min-width: 768px)',
  lg_xxl: '(min-width: 992px) and (max-width: 1440px)',

};
