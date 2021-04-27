import styled from 'styled-components'
import {theme} from "../../Theme/index"

export const StyledHeader = styled.header `
    width: 100%;
    height: 50px;
    display: flex;
    position: fixed;
    box-shadow: 0px 1px 10px #aaaaaa;
    align-items: center;
    justify-content: space-between; 
    background-color: white;
    opacity: 0.75;
`
export const NavUl = styled.ul `    
    list-style-type: none;
    padding: 0 40px 0 0;
    height: inherit;
    background-color: transparent;
    opacity: 1;
    li {
        float: left;
        height: 100%;
        cursor: pointer;
        color: ${theme.darkBlue};
        font-weight: bold;
        text-align: center;
        padding: 15px 16px;
        text-decoration: none;
        display: flex;
        align-items: center;
        height: 100%;
        :hover {
            background-color: ${theme.mediumpacityBlue};
        }
        :active {
            background-color: ${theme.lowpacityBlue};
        }
    }
    @media(max-width: 900px){
        display: block; 
        list-style-type: none;
        padding: 50px 0px 0 0;
        position: absolute;
        width: 100%;
        li {
            width: 100%;
            transform: scaleY(${props => props.open ? "1" : "0"});
            transform-origin: top;
            transition: transform 0.5s ease;
            background-color: black;
            padding: 24px 30px;
            border-bottom: 1px solid ${theme.jeans};
            color: white;
        }
  } 
`
export const MenuIcon = styled.div `
    width: 30px;
    height: 5px;
    background-color: #333;
    margin: 11px auto 6px;
    transition: 0.4s;
    z-index: 1;
        transform: rotate(${props => props.open ? "-45deg" : ""}) translate(${props => props.open ? "-9px, 6px" : ""});
`
export const MenuIcon2 = styled.div `
    width: 30px;
    height: 5px;
    background-color: #333;
    margin: 6px auto;
    transition: 0.4s;
    z-index: 1;
    opacity: ${props => props.open ? "0" : "1"};
`
export const MenuIcon3 = styled.div `
    width: 30px;
    height: 5px;
    background-color: #333;
    margin: 6px auto;
    transition: 0.4s;
    transform: rotate(${props => props.open ? "45deg" : ""}) translate(${props => props.open ? "-8px, -8px" : ""});
`

export const HambIcon = styled.div `
     display: none;
    @media(max-width: 900px){
        display: inline-block;
        cursor: pointer;
        width: 50px;
        height: 100%;
        padding-top: auto;
        z-index: 1;
        margin-right: 20px;
        :hover {
            background-color: ${theme.mediumpacityBlue};
            color: white;
        }
        :active {
            background-color: ${theme.lowpacityBlue};
            color: white;
        }
    }
`
export const CvName = styled.div `
    font-size: 1.65rem;
    margin: 0 0 0 30px;  
    font-weight: bold;
    color: ${theme.darkBlue}; 
    cursor: pointer; 
    z-index: 1;
`