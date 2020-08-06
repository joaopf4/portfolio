import styled from './node_modules/styled-components'
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
    }
    li a {
        display: block;
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
        display: inline-grid;
        list-style-type: none;
        padding: 50px 0px 0 0;
        position: absolute;
        right: 0px;
        width: 100%;
        li {
            transform: scaleY(${props => props.open ? "1" : "0"});
            transform-origin: top;
            transition: transform 0.5s ease;
            background-color: black;
            border-bottom: 1px solid ${theme.jeans};
        }
        li a {
            transform: scaleY(${props => props.open ? "1" : "0"});
            transform-origin: top;
            transition: transform 0.5s ease;
            color: white;
            align-self: right;
        }
  } 
`
export const HambIcon = styled.span `
     display: none;
    @media(max-width: 900px){
        display: block;
        margin-right: 20px;
        z-index: 1;
        width: 50px;
        height: 100%;
        :hover {
            background-color: ${theme.mediumpacityBlue};
            color: white;
        }
        :active {
            background-color: ${theme.lowpacityBlue};
            color: white;
        }
    } 
    a{
        color: ${theme.darkBlue};
        text-align: center;
        padding: 15px 14px;
        text-decoration: none;
        font-size: 26px;
        display: flex;
        align-items: center;
        height: 100%;
        :hover{
            cursor: pointer;
        }
    }
`
export const CvName = styled.a `
    font-size: 25px;
    text-decoration: none;
    margin: 0 0 0 30px;  
    font-weight: bold;
    color: ${theme.darkBlue}; 
    cursor: pointer; 
    z-index: 1;
`