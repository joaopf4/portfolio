import React from 'react';
import {MainDivHeader, HambIcon, CvName, CvUnderName, QrCodeLIn, 
    NameAndUnderWrapper, NameAndQrWrapper, DownDivHeader, ContactsDiv, 
    LittleInfo, NavUl, IconLinks, AddressDiv} from './styled'
import QrCode from '../../img/qrcode_linkedin.png'


function Header() {

        const [HambDisplay, setHambDisplay] = React.useState(true)

      return (
        <MainDivHeader>
            <CvName>
                João Pedro
            </CvName>

            <NavUl display={HambDisplay ? "none": "inline-grid" }> 
                <li><a class="active" href="#home">Home</a></li>
                <li><a href="#news">News</a></li>
                <li><a href="#contact">Contact</a></li>
                <li><a href="#about">About</a></li>
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