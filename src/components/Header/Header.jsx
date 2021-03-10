import React from 'react';
import { StyledHeader, HambIcon, CvName, NavUl, MenuIcon, MenuIcon2, MenuIcon3 } from './styled'
import { Link } from "react-scroll";

function Header() {
  const [hambDisplay, setHambDisplay] = React.useState(false)
  const toogleHambDisplay = () => {
    setHambDisplay(!hambDisplay)
  }
  return (
    <StyledHeader>
      <CvName>
        <Link
          activeClass="active"
          to="eujoao"
          spy={true}
          smooth={true}
          offset={-50}
          duration={500}
        >
          João Pedro
        </Link>
      </CvName>
      <NavUl open={hambDisplay}>
        <Link
          activeClass="active"
          to="aboutMe"
          spy={true}
          smooth={true}
          offset={-50}
          duration={500}
          onClick={toogleHambDisplay}
        >
          <li>Sobre mim</li>
        </Link>
        <Link
          activeClass="active"
          to="skills"
          spy={true}
          smooth={true}
          offset={-50}
          duration={500}
          onClick={toogleHambDisplay}
        >
          <li>Habilidades</li>
        </Link>     
        <Link
          activeClass="active"
          to="education"
          spy={true}
          smooth={true}
          offset={-50}
          duration={500}
          onClick={toogleHambDisplay}
        >
          <li>Educação</li>
        </Link>
        <Link
          activeClass="active"
          to="projects"
          spy={true}
          smooth={true}
          offset={-50}
          duration={500}
          onClick={toogleHambDisplay}
        >
          <li>Meus projetos</li>
        </Link>    
        <Link
          activeClass="active"
          to="contact"
          spy={true}
          smooth={true}
          offset={-50}
          duration={500}
          onClick={toogleHambDisplay}
        >
          <li>Contato</li>
        </Link>
      </NavUl>

      <HambIcon onClick={toogleHambDisplay} >
        <MenuIcon open={hambDisplay}></MenuIcon>
        <MenuIcon2 open={hambDisplay}></MenuIcon2>
        <MenuIcon3 open={hambDisplay}></MenuIcon3>
      </HambIcon>
    </StyledHeader>
  );
}

export default Header;