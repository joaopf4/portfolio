import React from 'react';
import {MainDivHeader, UpDivHeader, CvName, CvUnderName, QrCodeLIn, NameAndUnderWrapper, NameAndQrWrapper, DownDivHeader, ContactsDiv, LittleInfo} from './styled'
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
                <i class="fab fa-instagram"></i> 
                <i class="fab fa-linkedin"></i> 
                <i class="fab fa-github"></i> 
                <i class="fas fa-envelope"></i>

                </ContactsDiv>

            </DownDivHeader>
        </MainDivHeader>
      );
    }
  }
  
  export default Header;