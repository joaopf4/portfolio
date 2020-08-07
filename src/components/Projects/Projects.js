import React from 'react';
import { SingleProject, ProjectsWrapper, ThumbNail, ProjectText, MoreProjects} from './styled';
import Whats4 from '../../img/thumbs/whats4.gif'
import FutureEats from '../../img/thumbs/futureEats.gif'
import Eddit from '../../img/thumbs/4eddit.gif'
import Section from '../Section'
import {theme} from "../../Theme";

class Projects extends React.Component {
render() {
    return (        
    <Section 
        id="projects"
        title="Projetos" 
        bgColor={theme.white} 
        textColor={theme.darkBlue}   
    >

            <ProjectsWrapper>
                <SingleProject>
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
                </SingleProject>
                <SingleProject>
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
                </SingleProject>
                <SingleProject>
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
                </SingleProject>
                <MoreProjects><a href="https://github.com/joaopf4?tab=repositories" target="blank">Mais projetos</a>   <i class="fab fa-github"></i></MoreProjects>

        </ProjectsWrapper>
    </Section>
    );
    }
    }

    export default Projects;