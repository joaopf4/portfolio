import React from 'react';
import {MainDivHeader, HambIcon, CvName, NavUl} from './styled'


function Header() {

        const [HambDisplay, setHambDisplay] = React.useState(false)

      return (
        <MainDivHeader>
            <CvName href="#eujoao">
                João Pedro
            </CvName>

            <NavUl open={HambDisplay}> 
                <li><a onClick={()=> setHambDisplay(!HambDisplay)} href="#section1">Sobre mim</a></li> {/*preciso passar essa section1 por props */}
                <li><a onClick={()=> setHambDisplay(!HambDisplay)} href="#habilidades">Habilidades</a></li>
                <li><a onClick={()=> setHambDisplay(!HambDisplay)} href="#educacao">Educação</a></li>
                <li><a onClick={()=> setHambDisplay(!HambDisplay)} href="#projetos">Meus projetos</a></li>
                <li><a onClick={()=> setHambDisplay(!HambDisplay)} href="#contato">Contato</a></li>
            </NavUl>    
            <HambIcon onClick={()=> setHambDisplay(!HambDisplay)}>
                <a > 
                    <i class="fa fa-bars"></i>
                </a>
            </HambIcon>
        </MainDivHeader>
      );
    }
  
  
  export default Header;