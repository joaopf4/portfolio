import styled from 'styled-components'
import {theme} from "../../Theme/index";
import {Button} from "../GeneralComps/styled"

export const ProjectsWrapper = styled.div `
    margin: 0 auto;
    width: 85%;
    text-align: justify;
    line-height: 26px;
    a{
        text-decoration: none;
        color: white;
        :hover {
            color: ${theme.lightBlue};
        }
        :active{
            transform: translateY(3px);
            transition: .15s;
        }
    }
    @media(max-width: 620px){
        flex-direction: column;
        align-items: center;
    }
`
export const SingleProject = styled.div `
    text-align: left;
    width: 100%;
    margin-bottom: 20px;
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
    padding: 20px;
    img{
        width: 80%;
        min-width: 220px;
        max-width: 220px;
    }
`
export const ProjectText = styled.div `
    margin-left: 9vw;
    @media(max-width: 1010px){
    margin-left: 3vw;
    }
    a{  
        width: fit-content;
        display: block;
        color: ${theme.darkBlue};
        font-weight: 700;
    }
`
export const MoreProjects = styled(Button) `
    display: block;
    margin: auto;
    a{
        margin-right: 10px;
        :hover{
            color: white;
        }
    }
`
