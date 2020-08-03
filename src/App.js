import React from 'react';
import Header from './components/header/Header'
import Main from './components/main/Main'
import styled from 'styled-components'

function App() {
  return (
    <Body >
      <Header/>
      <Main/>
    </Body>
  );
}

const Body = styled.div `
  width: 100vw;
  color: #101010;
`

export default App;