import React from 'react';
import {MainDivHeader, UpDivHeader, CvName, CvUnderName, QrCodeLIn, 
    NameAndUnderWrapper, NameAndQrWrapper, DownDivHeader, ContactsDiv, 
    LittleInfo, IconLinks} from './styled'
import QrCode from '../../img/qrcode_linkedin.png'

class Header extends React.Component {
    render() {
      return (
        <MainDivHeader>
            <UpDivHeader>
                <NameAndQrWrapper>
                    <NameAndUnderWrapper>
                        <CvName>João Pedro Fonseca Achkar</CvName>
                        <CvUnderName>Brasileiro, 29 anos</CvUnderName>
                    </NameAndUnderWrapper>
                    <QrCodeLIn alt="LinkedIn" src={QrCode}/>
                </NameAndQrWrapper>
            </UpDivHeader>
            <DownDivHeader>
                <ContactsDiv>
                    <LittleInfo>Rua da Bahia 1759</LittleInfo>
                    <LittleInfo>Lourdes, Belo Horizonte MG</LittleInfo>
                    <LittleInfo>(31) 3213-3147 / 9 8816-5740</LittleInfo>
                </ContactsDiv>
                <ContactsDiv>
                <IconLinks href='http://www.instagram.com/joaopfa' target="blank"><i class="fab fa-instagram"></i> @joaopfa</IconLinks>
                <IconLinks href='http://www.linkedin.com/in/joaopfa' target="blank"><i class="fab fa-linkedin"></i>linkedin.com/in/joaopfa</IconLinks><IconLinks>
                <IconLinks href='https://github.com/joaopf4' target="blank"><i class="fab fa-github"></i>github.com/joaopf4</IconLinks></IconLinks>
                <IconLinks href='http://www.instagram.com/joaopfa' target="blank"><i class="fas fa-envelope"></i>joaopfa@hotmail.com</IconLinks>
                
                
                

                </ContactsDiv>

            </DownDivHeader>
        </MainDivHeader>
      );
    }
  }
  
  export default Header;