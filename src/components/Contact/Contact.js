import React from 'react';
import {SectionHeader, SectionText, IconsFooter, Icons} from './styled';
import Section from '../Section'
import {theme} from "../../Theme";

class Contact extends React.Component {
    render() {
        return (
            <Section 
            id="contact"
            title="Faça contato!" 
            bgColor={theme.lightOrange} 
            textColor={theme.darkBlue}
            >
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

export default Contact;