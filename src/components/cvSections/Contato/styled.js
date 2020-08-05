import styled from 'styled-components'
import {theme} from "../../../Theme/index";
import {IconLinks} from "../../generalComps/styled";

export const Section = styled.div `
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
export const IconsFooter = styled.div`
    display: flex;
    width: 80%;
    margin: auto;
    justify-content: space-evenly;
    color: ${theme.darkBlue};
`
export const Icons = styled(IconLinks) `
    color: ${theme.darkBlue};
    :hover{
    color: ${theme.lightBlue};
    }
    :active{
        color: ${theme.mediumpacityBlue};
    }
`