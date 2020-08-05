import React from 'react';
import {Section, SectionHeader, SectionText, IconsFooter, Icons} from './styled';


    class Contato extends React.Component {
        render() {
            return (
                        <Section id="contato">
                            <SectionHeader>Faça contato!</SectionHeader>
                            <SectionText>
                                <p>
                                Busco uma oportunidade de trabalho onde eu possa somar com meus conhecimentos e proatividade, 
                                além de me desenvolver e evoluir profissionalmente.
                                </p>
                                <p>
                                Email para contato: <b>joaopfa@hotmail.com</b>
                                </p>
                                Celular: (31) 988165740            
                            </SectionText>
                            <IconsFooter>
                                <Icons href='http://www.instagram.com/joaopfa' target="blank"><i class="fab fa-instagram"></i> </Icons>
                                <Icons href='http://www.linkedin.com/in/joaopfa' target="blank"><i class="fab fa-linkedin"></i></Icons>
                                <Icons href='https://github.com/joaopf4' target="blank"><i class="fab fa-github"></i></Icons>
                                <Icons href='https://api.whatsapp.com/send?phone=+5531988165740' target="blank"><i class="fab fa-whatsapp"></i></Icons>
                            </IconsFooter>   
                        </Section>
                );
            }
          }

          export default Contato;