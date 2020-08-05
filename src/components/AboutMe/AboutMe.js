import React from 'react';
import {Section, SectionHeader, SectionText} from './styled';

    class AboutMe extends React.Component {
        render() {
            return (
                        <Section id="aboutMe">
                            <SectionHeader>Sobre mim</SectionHeader>
                            <SectionText>
                                <p>                                    
                                Muito prazer! Me chamo João Pedro, e é uma honra recebê-lo em meu portfólio!  
                                </p>
                                <p>
                                Sou um jovem Belorizontino a poucos passos de entrar na casa dos 30, e que vem 
                                dedicando o seu último ano ao estudo de desenvolvimento web full-stack. 
                                </p>
                                <p>
                                Com formação em Publicidade e Propaganda e experiência que vai desde Gerente de Hostel à organizador
                                de passeios, corridas e oficinas de bicicleta, no momento venho me dedicando ao aprendizado de desenvolvimento web,
                                com atenção especial ao front-end, stack pela qual desperto maior interesse de atuação.
                                </p>
                                <p>                                    
                                Para isso, em 2019 participei do mês de imersão com a <a href="https://gama.academy/" target="blank">Gama Academy</a>,
                                e agora em 2020 dediquei o meu primeiro semestre ao curso de desenvolvimento web full-stack da 
                                <a href="https://www.labenu.com.br" target="blank"> Escola Labenu</a>, onde tive a oportunidade de criar aplicações desafiadoras 
                                e edificantes para o meu conhecimento.
                                </p>
                                <p>                                    
                                Para além dos códigos, atualmente dedico minhas horas vagas ao ciclismo, aos meus projetos 
                                <a href='http://www.instagram.com/girorua' target="blank"> Giro Rua </a> e
                                <a href='http://www.instagram.com/cicloficinaderua' target="blank"> Cicloficina de Rua </a>, para fomento
                                da ciclomobilidade e ciclocultura em minha cidade =).
                                </p>
                                
                            </SectionText>
                        </Section>
                );
            }
          }

          export default AboutMe;