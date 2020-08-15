import React from 'react';
import { StyledHeader, HambIcon, CvName, NavUl, MenuIcon, MenuIcon2, MenuIcon3 } from './styled'

function Header() {
  const [hambDisplay, setHambDisplay] = React.useState(false)
  const toogleHambDisplay = () => {
    setHambDisplay(!hambDisplay)
  }
  return (
    <StyledHeader>
      <CvName href="#eujoao">
        João Pedro
        </CvName>

      <NavUl open={hambDisplay}>
        <li><a onClick={toogleHambDisplay} href="#aboutMe">Sobre mim</a></li>
        <li><a onClick={toogleHambDisplay} href="#skills">Habilidades</a></li>
        <li><a onClick={toogleHambDisplay} href="#education">Educação</a></li>
        <li><a onClick={toogleHambDisplay} href="#projects">Meus projetos</a></li>
        <li><a onClick={toogleHambDisplay} href="#contact">Contato</a></li>
      </NavUl>
      <HambIcon onClick={toogleHambDisplay} >
        {/* <p href="">
          <i class="fa fa-bars"></i>
        </p> */}
        <MenuIcon open={hambDisplay}></MenuIcon>
        <MenuIcon2 open={hambDisplay}></MenuIcon2>
        <MenuIcon3 open={hambDisplay}></MenuIcon3>
   
      </HambIcon>
    </StyledHeader>
  );
}

export default Header;