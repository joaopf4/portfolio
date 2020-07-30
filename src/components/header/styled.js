import styled from 'styled-components'
import {theme} from "../../Theme/index"

export const MainDivHeader = styled.div `
    width: 100%;
    height: 50px;
    display: flex;
    position: sticky;
   box-shadow: 0px 1px 10px #aaaaaa;
    align-items: center;
    justify-content: space-between; 
    /* tornar responsível */
`
export const NavUl = styled.ul `    
    list-style-type: none;
    margin: 0;
    padding: 0 40px 0 0;
    height: inherit;
    overflow: hidden;
    background-color: transparent;
    li {
        float: right;
        height: 100%;
    }
    li a {
        display: block;
        color: ${theme.darkBlue};
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
export const CvName = styled.p `
    margin-left: 50px;
    
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
