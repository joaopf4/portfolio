import styled from 'styled-components'

export const CardHeader = styled.div `
    width: 100%;
    height: 60px;
    margin-bottom: 10px;
    font-size: 40px;
    white-space: nowrap;
`

export const CardContents = styled.div `
    width: inherit;
    min-width: fit-content;
    height: auto;
    padding: 18px;
    background: #cfcfcf;
    border-radius: 10px;
    box-sizing: border-box;
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