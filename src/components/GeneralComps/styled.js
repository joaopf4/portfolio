import styled from 'styled-components'
import {theme} from "../../Theme/index"

export const IconLinks = styled.a `
    color: white;
    font-size: 2.5rem;
    margin: 10px;
    :hover{
        color: ${theme.darkBlue};
        text-decoration: none;
        cursor: pointer;
    }
    :active{
        color: ${theme.mediumpacityBlue};
    }
    @media(max-width: 340px){
        font-size: 1.9rem;
    }
`
export const Button = styled.button `
    border-radius: 8px;
    box-shadow: 3px 3px 10px #000;
    padding: 15px;
    color: white;
    background-color: ${theme.darkBlue};
    border: none;
    font-weight: 800;
    font-size: 18px;
    width: fit-content;
    outline: none;
    margin: 15px 0px;
    :hover {
        cursor: pointer;
        background-color: ${theme.lightBlue};
    }
    :active {
        background-color: ${theme.jeans};    
        transform: translateY(3px);
        box-shadow: 0px 0px 4px #000;
        transition: .15s;
    }
    @media(max-width: 520px){
        font-weight: 400;
        font-size: 12px;
        padding: 12px;
    }
`