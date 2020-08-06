import styled from 'styled-components'
import {theme} from "../../Theme/index";

export const StyledSection = styled.div `
    width: inherit; 
    color: ${theme.darkBlue};  
    background-color: ${theme.lightOrange};
    height:fit-content;
    display: flex; 
    flex-direction: column;
`
export const SectionHeader = styled.div `
    width: fit-content;
    margin: 35px auto;
    font-size: 40px;
    white-space: nowrap;
    font-weight: 300;
    @media(max-width: 520px){
        font-size: 27px;
        margin: 50px auto 20px;
    }
`   
export const SectionText = styled.p `
    margin: 0 auto;
    width: 85%;
    text-align: center;
    line-height: 30px;
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
      @media(max-width: 520px){
      font-size: 15px;
      }
    }
`