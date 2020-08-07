import styled from 'styled-components'
import {theme} from "../../Theme/index";

export const SkillsWrapper = styled.div `
    text-align: justify;
    display: flex;
    justify-content: space-around;
    line-height: 26px;
    a{
        text-decoration: none;
        color: white;
        :hover {
            color: ${theme.lightBlue};
        }
    }
    @media(max-width: 680px){
        flex-direction: column;
        align-items: center;
    }
`
export const StackAbilities = styled.div `
    text-align: left;
    width: 40%;
    h3{
        font-size: 35px;
        font-weight: 600;
        margin-top: 0px;
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
    @media(max-width: 680px){
        :first-of-type{            
            margin-bottom: 30px;
        }
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