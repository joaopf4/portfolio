import styled from 'styled-components';
import ImgBg from '../../img/eu_perfil_quadrado.jpg';
//import ImgBg from '../../img/eu_cycling.jpeg';
import {theme} from "../../Theme/index";

export const MainBody = styled.div `
    width: inherit;
    height: inherit;
    background-color: white;
    /* padding-top: 50px; */
`
export const MainGrid = styled.div `
    padding: 15px;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(19rem, 1fr));
    height: inherit;
    grid-gap: 28px;
`
export const FirstSection = styled.div `
  width: 100%; 
  background-image: url(${ImgBg}) ;
  background-size: 50%;
  background-repeat: repeat;
  background-position-x: right;
  height: fit-content;
  min-height: 500px;
  display: flex; 
  @media(max-width: 1010px){
    background-size: cover;
    background-position-x: center;
    background-position-y: center;
  }
  `
export const FSLeft = styled.div `
  background-color: ${theme.mediumpacityBlue};
  width: 50%;
  height: auto;
  @media(max-width: 620px){
    width: 100%;
  }
  `
export const FSLTxt = styled.div `
    display: flex;
    margin: 55px 0px 10% 10%;
    flex-direction: column;
    color: white;
    h1{
        font-size: 2rem;
        max-width: 200px;
        margin: 6px 0px;
        @media(min-width: 1010px) {
            width: unset;
        }
    }
    h2{
        margin: 6px 0px;
        font-size: 1.4rem;
        font-weight: 400;
    }
    p {
       width: 85%;
       font-size: 0.8rem;
       text-align: justify;
    }
    @media(min-width: 1010px) {
        margin: 70px 0 20px 18%;
    }
  `
export const FSRight = styled.div `
  background-color: ${theme.lowpacityBlue};
  width: 50%;
  height: 100%;
  @media(max-width: 620px){
    display: none;
  }
  `