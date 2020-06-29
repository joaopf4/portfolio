import styled from 'styled-components'
var a = document.getElementById('www.instagram.com')

export const MainDivHeader = styled.div `
    min-width: 100%;
    width: fit-content;
    min-height: 190px;
    height: fit-content;
    background-color: #F37221;
    color: #101010;
`
/// Laranja claro:
export const UpDivHeader = styled.div `
    min-width: 100%;
    width: fit-content;
    height: fit-content;
    background-color: #feab74;
    padding: 15px 25px;
    box-sizing: border-box;
   
`   
export const CvName = styled.h1 `
    margin: auto 15px auto auto;
    @font-face {
    font-family: 'nexa_bold.otf';
    src: url("../header/fonts/nexa_bold.otf");
    }
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
