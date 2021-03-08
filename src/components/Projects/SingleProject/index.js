import React, { Component } from 'react';
import { SingleProject, ThumbNail, ProjectText} from '../styled';

class Project extends Component {
    render() { 
        return(
            <SingleProject key={this.props.id}>
                <ThumbNail>
                    <img alt='muckup-gif' src={this.props.img}/>
                </ThumbNail>
                <ProjectText>
                    <h1>{this.props.name}</h1>
                    <p>{this.props.type}</p>
                    <p>{this.props.description}</p>
                    <p>
                        <a href={this.props.deploy}>Deploy da aplicação</a>
                        <a href={this.props.repository}>Repositório <i class="fab fa-github"></i></a>
                    </p>
                </ProjectText>
            </SingleProject>
        );
    }
}

export default Project;