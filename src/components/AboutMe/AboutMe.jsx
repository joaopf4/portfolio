import React from 'react';
import { SectionText, AboutWrapper} from './styled';
import EuPerfil from '../../img/eu_perfil_quadrado.jpg'
import Section from '../Section'
import {theme} from "../../Theme";

class AboutMe extends React.Component {
    render() {   
        return (    
            <Section 
                id="aboutMe" 
                title="Sobre mim" 
                bgColor={theme.darkBlue} 
                textColor={theme.white}
            >                        
                <AboutWrapper >                                
                    <img alt="Foto perfil João Pedro" src={EuPerfil}/>
                    <SectionText>
                        <p>                                    
                        Muito prazer! Me chamo João Pedro, e é uma honra recebê-lo em meu portfólio!  
                        </p>
                        <p>
                        Sou um jovem Belorizontino recém chegado aos 30 anos, e que vem 
                        dedicando o seu último ano ao estudo de desenvolvimento web. 
                        </p>
                        <p>
                        Com formação em Publicidade e Propaganda e experiência que vai desde Gerente de Hostel à organizador
                        de passeios, corridas e oficinas de bicicleta, no momento venho me dedicando ao aprendizado de desenvolvimento web,
                        com atenção especial ao front-end, stack pela qual desperto maior interesse de atuação.
                        </p>
                        <p>                                    
                        Para isso, em 2019 participei do mês de imersão com a <a href="https://gama.academy/" target="blank">Gama Academy</a>,
                        e em 2020 dediquei o meu primeiro semestre ao curso de desenvolvimento web full-stack da 
                        <a href="https://www.labenu.com.br" target="blank"> Escola Labenu</a>, onde tive a oportunidade de criar aplicações desafiadoras 
                        e edificantes para o meu conhecimento.
                        </p>
                        <p>                                    
                        Em 2021 venho estudando React e suas complexidades através de cursos da Udemy e imersões de canais como Alura e RocketSeat.
                        </p>
                        <p>                                    
                        Para além dos códigos, dedico minhas horas vagas ao ciclismo e aos meus projetos 
                        <a href='http://www.instagram.com/girorua' target="blank"> Giro Rua </a> e
                        <a href='http://www.instagram.com/cicloficinaderua' target="blank"> Cicloficina de Rua</a>, por onde atuo no fomento
                        à ciclomobilidade e à ciclocultura em minha cidade =).
                        </p>                                
                    </SectionText>
                </AboutWrapper>
            </Section>
        );
    }
}

export default AboutMe;