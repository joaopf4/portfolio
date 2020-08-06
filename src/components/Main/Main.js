import React from 'react';
import {FirstSection, MainBody, FSLeft, FSRight, FSLTxt,
IconsWrapperR, IconsWrapperL} from './styled';
import {IconLinks, Buttons} from '../GeneralComps/styled'
import SobreMim from '../AboutMe';
import Educação from '../Education';
import Curriculo from '../../Documents/curriculo_joaopedro.pdf'
import Habilidades from '../Skills';
import Projetos from '../Projects';
import Contato from '../Contact';
import Footer from '../Footer';

    class Main extends React.Component {
        render() {
            return (
                <MainBody>
                    <FirstSection id="eujoao">
                        <FSLeft>
                            <FSLTxt>
                                <h1>Eu sou o João Pedro!</h1>
                                <h2>Desenvolvedor Web Full Stack</h2>
                                <p> ReactJS | HTML | CSS | JavaScript | TypeScript | MySQL | AWS | Firebase</p>
                                <a href={Curriculo} download = "curriculo_joaopedro.pdf"><Buttons>CV em PDF <i class="fa fa-download"></i></Buttons></a>
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
                    </FirstSection>
                        <SobreMim/>
                        <Habilidades/>    
                        <Educação/>
                        <Projetos/>
                        <Contato/>
                        <Footer/>

                </MainBody>
                );
            }
          }

          export default Main;