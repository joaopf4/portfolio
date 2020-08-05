import styled from 'styled-components'
import {theme} from "../../Theme/index";
import {Buttons} from "../GeneralComps/styled"

export const Section = styled.div `
    width: inherit; 
    color: ${theme.darkBlue};  
    background-color: ${theme.creamWhite};
    height:fit-content;
    display: flex; 
    flex-direction: column;
`
export const SectionHeader = styled.h1 `
    width: fit-content;
    margin: 35px auto;
    font-size: 40px;
    font-weight: 300;
    @media(max-width: 520px){
        font-size: 27px;
        margin: 50px auto 20px;
    }
`   
export const SectionText = styled.div `
    margin: 0 auto;
    width: 85%;
    text-align: justify;
    line-height: 26px;
    margin-bottom: 35px;
    a{
        text-decoration: none;
        color: white;
        :hover {
            color: ${theme.lightBlue};
        }
    }
    @media(max-width: 620px){
        flex-direction: column;
        align-items: center;
    }
`
export const StyledProjects = styled.div `
    text-align: left;
    width: 100%;
    display: flex;
    align-items: center;
    h1{
        font-size: 40px;
        font-weight: 600;
        @media(max-width: 520px){
        font-size: 27px;
        }
    }
    p{
        :first-of-type{
            margin-top: -10px;
            margin-bottom: 20px;
        }
      margin: 3px;
      @media(max-width: 520px){
      font-size: 15px;
      }
    }
    @media(max-width: 1010px){
        width: 85%;
        flex-direction: column-reverse;
    }
`
export const ThumbNail = styled.div `
    height: 100%;
    padding: 20px;
    img{
        width: 80%;
        min-width: 220px;
    }
`
export const ProjectText = styled.div `
    height: 100%;
    padding: 20px;
    a{  
        width: fit-content;
        display: block;
        color: ${theme.darkBlue};
        font-weight: 700;
    }
`
export const MaisProjetos = styled(Buttons) `
    display: block;
    margin: 15px auto;
    a{
        margin-right: 10px;
        :hover{
            color: white;
        }
    }
`
