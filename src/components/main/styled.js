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
  background-repeat: no-repeat;
  background-position-x: right;
  height: 100vh;
  display: flex; 
  background-size: cover;
    background-position-x: center;
    background-position-y: center;
  `
export const FSLeft = styled.div `
  background-color: ${theme.mediumpacityBlue};
  width: 50%;
  height: auto;
  display: flex;
  align-items: center;
  @media(max-width: 620px){
    width: 100%;
    flex-direction: column;
  }
  `
export const FSLTxt = styled.div `
    display: flex;
    /* margin: 20px 0px 10% 20px; */
    flex-direction: column;
    margin-left: 7vw;
    color: white;
    h1{
        font-size: 2rem;
        max-width: 200px;
        margin: 6px 0px;
        /* @media(min-width: 1010px) {
            width: unset;
        } */
    }
    h2{
        margin: 6px 0px;
        font-size: 1.4rem;
        font-weight: 400;
        @media(max-width: 400px) {
            width: 80%;
        }
    }
    p {
       width: 85%;
       font-size: 0.8rem;
       text-align: justify;
    }
    @media(max-width: 620px){
      margin: auto 0 auto 7vw;
  }
  `
export const FSRight = styled.div `
  background-color: ${theme.lowpacityBlue};
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  @media(max-width: 620px){
    display: none;
  }
  `
  export const IconsWrapperR = styled.div `
    display: flex; 
    flex-direction: column;
    margin-right: 30px;
    @media(max-width: 620px){
    display: none;
  }
  `
  export const IconsWrapperL = styled.div `
    display: none; 
    @media(max-width: 620px){
    display: flex;

    overflow:visible;
    width: 100%;
    justify-content: space-evenly;
  }
  `