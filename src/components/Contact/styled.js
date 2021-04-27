import styled from 'styled-components'
import {theme} from "../../Theme/index";
import {IconLinks} from "../GeneralComps/styled";


export const SectionText = styled.div `
    margin: 0 auto;
    width: 85%;
    text-align: center;
    line-height: 30px;
    margin-bottom: 10px;
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