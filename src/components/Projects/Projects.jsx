import React from 'react';
import { ProjectsWrapper, MoreProjects} from './styled';
import Whats4 from '../../img/thumbs/whats4.gif'
import FutureEats from '../../img/thumbs/futureEats.gif'
import Eddit from '../../img/thumbs/4eddit.gif'
import CyclingQuiz from '../../img/thumbs/cyclingquiz.gif'
import Section from '../Section'
import { theme } from '../../Theme';
import { ProjectsStrings } from './strings'
import Project from './SingleProject';

class Projects extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            projects: [
                {
                    id: 0, 
                    name: 'Cycling Quiz', 
                    type: 'Front-end',
                    img: `${CyclingQuiz}`,
                    description: ProjectsStrings.projectDescription[0].description, 
                    deploy: 'https://imersao-alura-nextjs.joaopf4.vercel.app/',
                    repository: 'https://github.com/joaopf4/imersao-alura-nextjs'
                },
                {
                    id: 1,
                    name: 'Whats4',
                    type: 'Front-end',
                    img: `${Whats4}`,
                    description: ProjectsStrings.projectDescription[1].description,
                    deploy: 'http://bizarre-cook.surge.sh/',
                    repository: 'https://github.com/joaopf4/whatsReplica'
                },
                {
                    id: 2,
                    name: 'Future Eats',
                    type: 'Front-end',
                    img: `${FutureEats}`,
                    description: ProjectsStrings.projectDescription[2].description,
                    deploy: 'http://projeto-final-hamilton-future-eats.surge.sh/',
                    repository: 'https://github.com/joaopf4/futureEats'
                },
                {
                    id: 3,
                    name: '4Eddit',
                    type: 'Front-end',
                    img: `${Eddit}`,
                    description: ProjectsStrings.projectDescription[3].description,
                    deploy: 'http://furry-control.surge.sh/',
                    repository: 'https://github.com/joaopf4/4eddit'
                },
            ]
        };
        {console.log(this.state.projects)}
    }


    render() {
        return (        
        <Section 
            id="projects"
            title="Projetos" 
            bgColor={theme.creamWhite} 
            textColor={theme.darkBlue}   
        >
            <ProjectsWrapper>
                {this.state.projects.map((project)=>{
                    return(
                        <Project
                            id={project.id}
                            name={project.name}
                            type={project.type}
                            img={project.img}
                            description={project.description}
                            deploy={project.deploy}
                            repository={project.repository}
                        />
                    )
                })}
                    {/* <SingleProject>
                        <ThumbNail>
                            <img alt="muckup-gif" src={CyclingQuiz}/>
                        </ThumbNail>
                        <ProjectText>
                            <h1>Cycling Quiz</h1>
                            <p>
                                Front-end
                            </p>
                            <p>
                                Projeto feito durante a imersão Allura em NextJS, onde fizemos um quiz utilizando NextJS como framework. 
                                Personalizei o tema do quiz com meu principal Hobbie que é bicicleta!
                            </p>
                            <p>
                            <a href="https://imersao-alura-nextjs.joaopf4.vercel.app/" target="blank">Deploy da aplicação</a> 
                            <a href="https://github.com/joaopf4/imersao-alura-nextjs" target="blank">Repositório   <i class="fab fa-github"></i></a> 
                            
                            </p>
                        </ProjectText>
                    </SingleProject>
                    <SingleProject>
                        <ThumbNail>
                            <img alt="muckup-gif" src={Whats4}/>
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
                            <img alt="muckup-gif" src={FutureEats}/>
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
                            <img alt="muckup-gif" src={Eddit}/>
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
                    </SingleProject> */}
                    <MoreProjects><a href="https://github.com/joaopf4?tab=repositories" target="blank">Mais projetos</a>   <i class="fab fa-github"></i></MoreProjects>
            </ProjectsWrapper>
        </Section>
        );
    }
}

    export default Projects;