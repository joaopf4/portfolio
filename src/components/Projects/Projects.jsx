import React from 'react';
import { ProjectsWrapper, MoreProjects} from './styled';
import Whats4 from '../../img/thumbs/whats4.gif';
import FutureEats from '../../img/thumbs/futureEats.gif';
import Eddit from '../../img/thumbs/4eddit.gif';
import CyclingQuiz from '../../img/thumbs/cyclingquiz.gif';
import StravaClone from '../../img/thumbs/strava-clone.gif';
import Filmaria from '../../img/thumbs/filmaria.gif';
import Section from '../Section';
import { theme } from '../../Theme';
import { ProjectsStrings } from './strings';
import Project from './SingleProject';
import {Button} from '../GeneralComps/styled';

class Projects extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            projects: [
                {
                    id: 0, 
                    name: 'Filmaria', 
                    type: 'Front-end',
                    img: `${Filmaria}`,
                    description: ProjectsStrings.projectDescription[0].description, 
                    deploy: 'https://filmaria-joaopfa.netlify.app/',
                    repository: 'https://github.com/joaopf4/filmaria'
                },
                {
                    id: 1, 
                    name: 'Strava-Clone', 
                    type: 'Front-end',
                    img: `${StravaClone}`,
                    description: ProjectsStrings.projectDescription[1].description, 
                    deploy: 'https://strava-clone.vercel.app/',
                    repository: 'https://github.com/joaopf4/strava-clone'
                },
                {
                    id: 2, 
                    name: 'Cycling Quiz', 
                    type: 'Front-end',
                    img: `${CyclingQuiz}`,
                    description: ProjectsStrings.projectDescription[2].description, 
                    deploy: 'https://imersao-alura-nextjs.joaopf4.vercel.app/',
                    repository: 'https://github.com/joaopf4/imersao-alura-nextjs'
                },
                {
                    id: 3,
                    name: 'Whats4',
                    type: 'Front-end',
                    img: `${Whats4}`,
                    description: ProjectsStrings.projectDescription[3].description,
                    deploy: 'http://bizarre-cook.surge.sh/',
                    repository: 'https://github.com/joaopf4/whatsReplica'
                },
                {
                    id: 4,
                    name: 'Future Eats',
                    type: 'Front-end',
                    img: `${FutureEats}`,
                    description: ProjectsStrings.projectDescription[4].description,
                    deploy: 'http://projeto-final-hamilton-future-eats.surge.sh/',
                    repository: 'https://github.com/joaopf4/futureEats'
                },
                {
                    id: 5,
                    name: '4Eddit',
                    type: 'Front-end',
                    img: `${Eddit}`,
                    description: ProjectsStrings.projectDescription[5].description,
                    deploy: 'http://furry-control.surge.sh/',
                    repository: 'https://github.com/joaopf4/4eddit'
                },
            ]
        };
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
            </ProjectsWrapper>
            <br/><br/>
            <MoreProjects href="https://github.com/joaopf4?tab=repositories" target="_blank">
                <Button>Mais projetos  <i class="fab fa-github"></i></Button>
            </MoreProjects>
        </Section>
        );
    }
}

    export default Projects;