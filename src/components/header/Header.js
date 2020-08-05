import React from 'react';
import {MainDivHeader, HambIcon, CvName, NavUl} from './styled'


function Header() {

        const [hambDisplay, setHambDisplay] = React.useState(false)
        const toogleHambDisplay = () => {
          setHambDisplay(!hambDisplay)
        }
      return (
        <MainDivHeader>
            <CvName href="#eujoao">
                João Pedro
            </CvName>

            <NavUl open={hambDisplay}> 
                <li><a onClick={toogleHambDisplay} href="#section1">Sobre mim</a></li> {/*preciso passar essa section1 por props */}
                <li><a onClick={toogleHambDisplay}  href="#habilidades">Habilidades</a></li>
                <li><a onClick={toogleHambDisplay}  href="#educacao">Educação</a></li>
                <li><a onClick={toogleHambDisplay}  href="#projetos">Meus projetos</a></li>
                <li><a onClick={toogleHambDisplay}  href="#contato">Contato</a></li>
            </NavUl>    
            <HambIcon onClick={toogleHambDisplay} >
                <a > 
                    <i class="fa fa-bars"></i>
                </a>
            </HambIcon>
        </MainDivHeader>
      );
    }
  
  
  export default Header;