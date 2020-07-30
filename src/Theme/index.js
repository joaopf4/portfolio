import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Montserrat|Roboto');
  body {
    margin: 0;
    padding:0;
    font-family: Roboto, sans-serif;
  }
  * {
    box-sizing: border-box;
  }
  @font-face {
    font-family: 'nexa_bold.otf';
    src: url("../header/fonts/nexa_bold.otf");
    }
`;
export const theme = {
    white: "#fffffb",
    lowpacityBlue: "rgba(78, 164, 217, 0.38)",
    mediumpacityBlue: "rgba(0, 67, 108, 0.64)",
    darkBlue: "#012940",
    lightBlue: "#4ea4d9",
    lightOrange: "#f3d7b6",
    orange: "#f2b33e",
    jeans:"#5b83a6",
    creamWhite: "#f2f2f2"
}