import styled from 'styled-components'
import {theme} from "../../Theme";

export const StyledSection = styled.section `
    width: inherit; 
    color: ${(props) => props.textColor};  
    background-color: ${(props) => props.bgColor};
    height:fit-content;
    display: flex; 
    flex-direction: column;
`
export const SectionTitle = styled.h2 `
    width: fit-content;
    margin: 40px auto 30px auto;
    font-size: 40px;
    white-space: nowrap;
    font-weight: 300;
    @media(max-width: 520px){
        font-size: 27px;
        margin: 45px auto 20px;
    }
`   
export const SectionContent = styled.div `
    padding: 0px 6vw 40px;
`
