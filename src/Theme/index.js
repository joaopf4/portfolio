import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;1,500&display=swap');
  body {
    margin: 0;
    padding:0;
    font-family: 'Montserrat', sans-serif;
    }

  * {
    box-sizing: border-box;
    font-family: 'Montserrat', sans-serif;
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