import styled from 'styled-components'
import {theme} from "../../../Theme/index";

export const Section = styled.div `
    width: inherit; 
    color: white;  
    background-color: ${theme.darkBlue};
    height:fit-content;
    display: flex; 
    flex-direction: column;
`

export const SectionHeader = styled.div `
    width: fit-content;
    margin: 35px auto;
    font-size: 40px;
    white-space: nowrap;
    font-weight: 200;
`   
export const SectionText = styled.p `
    margin: 0 auto;
    width: 85%;
    text-align: justify;
    text-indent: 40px;
    line-height: 26px;
    margin-bottom: 35px;
    a{
        text-decoration: none;
        color: white;
        :hover{
            color: ${theme.lightBlue};
    }
}
    p{
      margin: 3px;
    }


`