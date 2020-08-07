import styled from 'styled-components'
import {theme} from "../../Theme";

export const Section = styled.div `
    width: inherit; 
    color: ${theme.darkBlue};  
    background-color: ${theme.lowpacityBlue};
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
        font-size: 27px;
        margin: 50px auto 20px;
    }
`   
export const EducCardsWrapper = styled.div `
    margin: 0 auto;
    display: flex;
    line-height: 26px;
    a{
        text-decoration: none;
        color: white;
        :hover {
            color: ${theme.lightBlue};
        }
    }

    @media(max-width: 1010px){
        flex-direction: column;
        align-items: center;
    }
`
export const EducCard = styled.div ` 
    margin: 0px 16px;
    text-align: left;
    width: 40%;
    background-color: ${theme.creamWhite};
    border-radius: 16px 0px 16px 0px;
    padding: 18px;
    a{
        color: inherit;
    }
    h4{
        font-size: 25px;
        font-weight: 600;
        margin-top: 0;
        @media(max-width: 520px){
        font-size: 22px;
        }
    }
    p{
        :first-of-type{
        font-size: 18px;
        margin-bottom: 10px;
        }
      margin: 3px;
      @media(max-width: 520px){
      font-size: 15px;
      }
    }
    @media(max-width: 1010px){
        width: 90%;
        margin: 16px 0px;
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