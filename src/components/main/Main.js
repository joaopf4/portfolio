import React from 'react';
import {MainGrid, FirstSection, MainBody, FSLeft, FSRight, FSLTxt,
IconsWrapperR, IconsWrapperL} from './styled';
import {IconLinks, Buttons} from '../generalComps/styled'
import SobreMim from '../cvSections/SobreMim/SobreMim';
import Educação from '../cvSections/Educação/Educação';
import Curriculo from '../../documents/curriculo_joaopedro.pdf'
import Habilidades from '../cvSections/Habilidades/Habilidades';
import Experiencias from '../cvSections/Experiências profissionais/Experiencias';

    class Main extends React.Component {
        render() {
            return (
                <MainBody>
                    <FirstSection id="eujoao">
                        <FSLeft>
                            <FSLTxt>
                                <h1>Eu sou o João Pedro!</h1>
                                <h2>Desenvolvedor Web Full Stack</h2>
                                {/* <p>
                                Muito prazer! Me chamo João Pedro, e é uma honra recebê-lo em meu portfólio!        
                                <br/>Sou um jovem Belorizontino a poucos passos de entrar na casa dos 30, que vem 
                                dedicando os últimos 2 anos ao aprendizado de desenvolvimento-web full stack.                                 
                                <br/>Adoro desenvolver front-end e pesquisar sobre responsividade e UX/UI.
                                <br/>Abaixo, algumas stacks que possuo maior domínio, e um link para baixar meu currículo em PDF:                   
                            </p> */}
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
                

                        <SobreMim id="section1"/>
                        <Habilidades/>    
                        <Educação/>
                        {/* <Experiencias/> */}

                </MainBody>
                );
            }
          }

          export default Main;