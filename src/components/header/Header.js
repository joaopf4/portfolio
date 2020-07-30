import React from 'react';
import {MainDivHeader, SpacingDiv, CvName, CvUnderName, QrCodeLIn, 
    NameAndUnderWrapper, NameAndQrWrapper, DownDivHeader, ContactsDiv, 
    LittleInfo, NavUl, IconLinks, AddressDiv} from './styled'
import QrCode from '../../img/qrcode_linkedin.png'

class Header extends React.Component {
    render() {
        function myFunction() {
            var x = document.getElementById("myLinks");
            // if (x.style.display === "block") {
            //   x.style.display = "none";
            // } else {
            //   x.style.display = "block";
            // }
          }
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
            <li>
                <a href="javascript:void(0);" class="icon" onClick={myFunction()}>
                    <i class="fa fa-bars"></i>
                </a>
            </li>
        </NavUl>    

        </MainDivHeader>
      );
    }
  }
  
  export default Header;