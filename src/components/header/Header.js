import React from 'react';
import {MainDivHeader, HambIcon, CvName, CvUnderName, QrCodeLIn, 
    NameAndUnderWrapper, NameAndQrWrapper, DownDivHeader, ContactsDiv, 
    LittleInfo, NavUl, IconLinks, AddressDiv} from './styled'
import { Link, animateScroll as scroll } from "react-scroll";

function Header() {

        const [HambDisplay, setHambDisplay] = React.useState(true)

      return (
        <MainDivHeader>
            <CvName href="#eujoao">
                João Pedro
            </CvName>

            <NavUl display={HambDisplay ? "none": "inline-grid" }> 
                <li><a onClick={()=> setHambDisplay(!HambDisplay)} href="#section1">Sobre mim</a></li> {/*preciso passar essa section1 por props */}
                <li><a onClick={()=> setHambDisplay(!HambDisplay)} href="#habilidades">Habilidades</a></li>
                <li><a onClick={()=> setHambDisplay(!HambDisplay)} href="#educacao">Educação</a></li>
                <li><a onClick={()=> setHambDisplay(!HambDisplay)} href="#about">Meus projetos</a></li>
                <li><a onClick={()=> setHambDisplay(!HambDisplay)} href="#about">Contato</a></li>
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