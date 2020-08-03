import styled from 'styled-components'
import {theme} from "../../Theme/index";

export const CardHeader = styled.div `
    width: 100%;
    height: 60px;
    margin-bottom: 10px;
    font-size: 40px;
    white-space: nowrap;
`

export const CardContents = styled.div `
    width: inherit; 

    background-color: ${theme.mediumpacityBlue};
    height: fit-content;
    display: flex; 
    flex-direction: column;
`

export const Abilities = styled.span `
    border-radius: 12px;
    background-color: #F37221;
    padding: 6px;
    font-weight: 700;
    width: fit-content;
    margin: 5px;
    white-space: nowrap;
`
export const AbilitiesGroup = styled.div `
    display: grid;
    grid-template-columns: auto auto auto;
    grid-gap: 10px;
`

export const Lista = styled.ul `
`
export const ItenLista = styled.li `
`