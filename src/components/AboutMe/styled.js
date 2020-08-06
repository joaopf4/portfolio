import styled from 'styled-components'
import {theme} from "../../Theme/index";

export const Section = styled.div `
    width: inherit; 
    color: white;  
    background-color: ${theme.darkBlue};
    height:fit-content;
    display: flex; 
    flex-direction: column;
    padding: 30px 35px 40px;
    img{
        border-radius: 16px 0px 16px 0px;
        width: 400px;
        margin: 0 30px;
        @media(max-width:980px){
            margin: 0 0 30px 0;
        }
        @media(max-width:620px){
            width: 75%;
            margin: 0;
        }
    }
`
export const AboutWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    @media(max-width: 980px){
        flex-direction: column;
    }
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
      margin: 3px;
      @media(max-width: 520px){
      font-size: 15px;
      }
    }
    @media(max-width:980px){
        width:100%;
    }

`