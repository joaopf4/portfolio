import React from 'react';
import {Section, SectionHeader, Projects, SectionText, ThumbNail, ProjectText, MaisProjetos} from './styled';
import Whats4 from '../../../img/thumbs/whats4.gif'
import FutureEats from '../../../img/thumbs/futureEats.gif'
import Eddit from '../../../img/thumbs/4eddit.gif'

class Projetos extends React.Component {
render() {
    return (
    <Section id="projetos">
        <SectionHeader>Meus Projetos</SectionHeader>
            <SectionText>
                <Projects>
                    <ThumbNail>
                        <img src={Whats4}/>
                    </ThumbNail>
                    <ProjectText>
                        <h1>Whats4</h1>
                        <p>
                            Front-end
                        </p>
                        <p>
                            Projeto de uma reprodução simples do WhatsApp. Um produto mínimo 
                            viável de uma aplicação de chat de mensagens.
                        </p>
                        <p>
                         <a href="http://bizarre-cook.surge.sh/" target="blank">Deploy da aplicação</a> 
                         <a href="https://github.com/joaopf4/whatsReplica" target="blank">Repositório   <i class="fab fa-github"></i></a> 
                         
                        </p>
                    </ProjectText>
                </Projects>
                <Projects>
                    <ThumbNail>
                        <img src={FutureEats}/>
                    </ThumbNail>
                    <ProjectText>
                        <h1>Future Eats</h1>
                        <p>
                            Front-end
                        </p>
                        <p>
                            Projeto de uma reprodução do UberEats, com funções de cadastro, login, proteção da tela de feed,
                            uso de redux, routes e actions.  
                        </p>
                        <p>
                         <a href="http://projeto-final-hamilton-future-eats.surge.sh/" target="blank">Deploy da aplicação</a> 
                         <a href="https://github.com/joaopf4/futureEats" target="blank">Repositório   <i class="fab fa-github"></i></a> 
                         
                        </p>
                    </ProjectText>
                </Projects>
                <Projects>
                    <ThumbNail>
                        <img src={Eddit}/>
                    </ThumbNail>
                    <ProjectText>
                        <h1>4Eddit</h1>
                        <p>
                            Front-end
                        </p>
                        <p>
                            Projeto de uma reprodução de um modelo simplificado de funcionamento e consumo 
                            de uma API que se assemelha a aplicação do Reddit, onde posts podem receber likes/unlikes e comentários,
                            através da integração com uma API.
                        </p>
                        <p>
                         <a href="http://furry-control.surge.sh/" target="blank">Deploy da aplicação</a> 
                         <a href="https://github.com/joaopf4/4eddit" target="blank">Repositório   <i class="fab fa-github"></i></a> 
                         
                        </p>
                    </ProjectText>
                </Projects>
                <MaisProjetos><a href="https://github.com/joaopf4?tab=repositories" target="blank">Mais projetos</a>   <i class="fab fa-github"></i></MaisProjetos>

        </SectionText>
    </Section>
    );
    }
    }

    export default Projetos;