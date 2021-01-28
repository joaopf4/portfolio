import React from 'react';
import {
    StyledMainSection, FSLeft, FSRight, FSLTxt,
    IconsWrapperR, IconsWrapperL
} from './styled';
import Curriculo from '../../documents/curriculo_joaopedro.pdf'
import { IconLinks, Buttons } from '../GeneralComps/styled'

class MainSection extends React.Component {
    render() {
        return (
            <StyledMainSection id="eujoao">
                <FSLeft>
                    <FSLTxt>
                        <h1>Eu sou o João Pedro!</h1>
                        <h2>Desenvolvedor Web Full Stack</h2>
                        <p> ReactJS | HTML | CSS | JavaScript | TypeScript | MySQL | AWS | Firebase</p>
                        <a href={Curriculo} download="Currículo João Pedro Fonseca.pdf"><Buttons>CV em PDF <i class="fa fa-download"></i></Buttons></a>
                    </FSLTxt>
                    <IconsWrapperL>
                        <IconLinks href='http://www.instagram.com/joaopfa' target="blank"><i class="fab fa-instagram"></i> </IconLinks>
                        <IconLinks href='http://www.linkedin.com/in/joaopfa' target="blank"><i class="fab fa-linkedin"></i></IconLinks>
                        <IconLinks href='https://github.com/joaopf4' target="blank"><i class="fab fa-github"></i></IconLinks>
                        <IconLinks href='https://api.whatsapp.com/send?phone=+5531988165740' target="blank"><i class="fab fa-whatsapp"></i></IconLinks>
                    </IconsWrapperL>
                </FSLeft>

                <FSRight>
                    <IconsWrapperR>
                        <IconLinks href='http://www.instagram.com/joaopfa' target="blank"><i class="fab fa-instagram"></i> </IconLinks>
                        <IconLinks href='http://www.linkedin.com/in/joaopfa' target="blank"><i class="fab fa-linkedin"></i></IconLinks>
                        <IconLinks href='https://github.com/joaopf4' target="blank"><i class="fab fa-github"></i></IconLinks>
                        <IconLinks href='https://api.whatsapp.com/send?phone=+5531988165740' target="blank"><i class="fab fa-whatsapp"></i></IconLinks>
                    </IconsWrapperR>
                </FSRight>
            </StyledMainSection>

        );
    }
}

export default MainSection;