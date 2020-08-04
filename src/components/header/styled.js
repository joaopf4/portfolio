import styled from 'styled-components'
import {theme} from "../../Theme/index"

export const MainDivHeader = styled.div `
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
        /* display: ${props => props.display}; */
        display: inline-grid;
        transform: translateY(${props => props.open ? "0px" : "-305px" });
        list-style-type: none;
        padding: 50px 0px 0 0;
        position: absolute;
        right: 0px;
        width: 100%;
        transition: 0.7s;
        li {
            background-color: black;
            border-bottom: 1px solid ${theme.jeans};
        }
        li a {
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

export const SpacingDiv = styled.div `
width: 70vw;
`

export const UpDivHeader = styled.div `
    min-width: 100%;
    width: fit-content;
    height: fit-content;
    background-color: #feab74;
    padding: 15px 25px;
    box-sizing: border-box;
   
`   
export const CvName = styled.a `
    font-size: 25px;
    text-decoration: none;
    margin: 0 0 0 30px;  
    font-weight: bold;
    color: ${theme.darkBlue}; 
    cursor: pointer; 
`
export const NameAndUnderWrapper = styled.div ``
export const NameAndQrWrapper = styled.div`
    display: flex;
    justify-content: space-between;
`
export const CvUnderName = styled.h3 `
    margin: 0;
`
export const QrCodeLIn = styled.img `
    width:80px;
    margin: auto;
`
////Laranja escuro 
export const DownDivHeader = styled.div `
    width: 100%;
    display: grid; 
    grid-template-columns: 1fr 2fr 1fr;
`
export const AddressDiv = styled.div `
    padding: 25px; 
    grid-column: 1;
`
export const ContactsDiv = styled.div `
    display: grid; 
    grid-template-columns: 1fr 1fr;
    padding: 25px; 
    grid-column: 2;
`
export const LittleInfo = styled.p `
    margin: 3px;
    font-weight: 700;
`

export const IconLinks = styled.a `
    color: inherit;
    font-size: 1.5rem;
    margin: 5px;
    :hover{
        color: gray;
        text-decoration: none;
        cursor: pointer;
    }
`
export const DivOne = styled.div `
    grid-column: 1;
`
export const DivTwo = styled.div `
    grid-column: 2;
`
