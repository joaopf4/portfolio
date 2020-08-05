import React from 'react';
import {Section, SectionHeader, Projects, SectionText, ThumbNail, ProjectText} from './styled';
import Whats4 from '../../../img/thumbs/whats4.gif'

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
    

        </SectionText>
    </Section>
    );
    }
    }

    export default Projetos;