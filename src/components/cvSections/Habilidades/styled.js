import styled from 'styled-components'
import {theme} from "../../../Theme/index";

export const Section = styled.div `
    width: inherit; 
    color: white;  
    background-color: ${theme.jeans};
    height:fit-content;
    display: flex; 
    flex-direction: column;
`
export const SectionHeader = styled.h1 `
    width: fit-content;
    margin: 35px auto;
    font-size: 40px;
    font-weight: 300;
    @media(max-width: 520px){
        width: 70%;
        font-size: 27px;
        margin: 50px auto 20px;
    }
`   
export const SectionText = styled.div `
    margin: 0 auto;
    width: 85%;
    text-align: justify;
    display: flex;
    justify-content: space-evenly;
    line-height: 26px;
    margin-bottom: 35px;
    a{
        text-decoration: none;
        color: white;
        :hover {
            color: ${theme.lightBlue};
        }
    }

    @media(max-width: 620px){
        flex-direction: column;
        align-items: center;
    }
`
export const StackAbilities = styled.div `
    text-align: left;
    width: 40%;
    h1{
        font-size: 40px;
        font-weight: 600;
        @media(max-width: 520px){
        font-size: 27px;
        }
    }
    p{
      margin: 3px;
      @media(max-width: 520px){
      font-size: 15px;
      }
    }
    @media(max-width: 620px){
        width: 85%;
    }
`
export const Abilities = styled.span `
    border-radius: 12px;
    background-color: ${theme.lightBlue};
    padding: 6px;
    font-weight: 700;
    width: fit-content;
    margin: 5px;
    white-space: nowrap;
`
export const AbilitiesGroup = styled.div `
    display: grid;
    grid-template-columns: auto auto auto;
    grid-gap: 10px;
`