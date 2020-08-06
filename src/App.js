import React from 'react';
import Header from './Components/Header'
import Main from './Components/Main'
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
