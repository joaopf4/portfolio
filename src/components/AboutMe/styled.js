import styled from 'styled-components'
import {theme} from "../../Theme/index";

export const AboutWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    @media(max-width: 980px){
        flex-direction: column;
    }
    img{
         border-radius: 18px 0px 18px 0px;
         width: 400px;
         margin-right: 20px;
         @media(max-width:980px){
             margin: 0 0 30px 0;
         }
         @media(max-width:620px){
             width: 75%;
         }
     }
`

export const SectionText = styled.div `
    width: 60%;
    text-align: justify;
    text-indent: 40px;
    line-height: 26px;
    a{
        text-decoration: none;
        color: white;
        :hover{
            color: ${theme.lightBlue};
        }
    }
    p{
      margin: 2px;
      @media(max-width: 520px){
      font-size: 15px;
      }
    }
    @media(max-width:980px){
        width:100%;
    }

`