import styled from 'styled-components'
import {theme} from "../../Theme/index"

export const IconLinks = styled.a `
    color: white;
    font-size: 1.5rem;
    margin: 5px;
    :hover{
        color: ${theme.darkBlue};
        text-decoration: none;
        cursor: pointer;
    }
    :active{
        color: ${theme.mediumpacityBlue};
    }
`
export const Buttons = styled.button `
    border-radius: 8px;
    box-shadow: 2px 2px 10px #000;
    padding: 5px 14px;
    color: white;
    background-color: ${theme.darkBlue};
    border: none;
    width: fit-content;
    outline: none;
    margin: 15px 0px;
    :hover {
        cursor: pointer;
        background-color: ${theme.lightBlue};
    }
    :active {
        background-color: ${theme.jeans};

    }
`