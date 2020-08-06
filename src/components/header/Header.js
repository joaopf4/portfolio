import React from './node_modules/react';
import {StyledHeader, HambIcon, CvName, NavUl} from './styled'


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
                <li><a onClick={toogleHambDisplay} href="#aboutMe">Sobre mim</a></li> {/*preciso passar essa section1 por props */}
                <li><a onClick={toogleHambDisplay}  href="#skills">Habilidades</a></li>
                <li><a onClick={toogleHambDisplay}  href="#education">Educação</a></li>
                <li><a onClick={toogleHambDisplay}  href="#projects">Meus projetos</a></li>
                <li><a onClick={toogleHambDisplay}  href="#contact">Contato</a></li>
            </NavUl>    
            <HambIcon onClick={toogleHambDisplay} >
                <a > 
                    <i class="fa fa-bars"></i>
                </a>
            </HambIcon>
        </StyledHeader>
      );
    }
  
  
  export default Header;