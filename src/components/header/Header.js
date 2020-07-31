import React from 'react';
import {MainDivHeader, HambIcon, CvName, CvUnderName, QrCodeLIn, 
    NameAndUnderWrapper, NameAndQrWrapper, DownDivHeader, ContactsDiv, 
    LittleInfo, NavUl, IconLinks, AddressDiv} from './styled'
import QrCode from '../../img/qrcode_linkedin.png'


class Header extends React.Component {
    render() {
        /*
         const renderMenuMobile = () => {
             const Hamb = NavUl;
             if(Hamb.style.display === "none") {
                 Hamb.style.display = "inline-grid"
             } else {
                 Hamb.style.display === "none"
             } 
         }
*/
      return (
        <MainDivHeader>
        <CvName>
        João Pedro
        </CvName>

        <NavUl id="myLinks"> 
            <li><a class="active" href="#home">Home</a></li>
            <li><a href="#news">News</a></li>
            <li><a href="#contact">Contact</a></li>
            <li><a href="#about">About</a></li>
        </NavUl>    
        <HambIcon>
            <a className="hamb" href=""  /*onClick={this.renderMenuMobile()}*/ > 
                <i class="fa fa-bars"></i>
            </a>
        </HambIcon>

        </MainDivHeader>
      );
    }
  }
  
  export default Header;