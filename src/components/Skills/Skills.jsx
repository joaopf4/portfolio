import React from 'react';
import {StackAbilities, SkillsWrapper} from './styled';
import Section from '../Section'
import {theme} from "../../Theme";

class Skills extends React.Component {
    render() {
        return (
            <Section 
                id="skills"
                title="Habilidades técnicas" 
                bgColor={theme.mediumpacityBlue} 
                textColor={theme.white}
            >                
                <SkillsWrapper>
                    <StackAbilities>
                        <h3>Front-end</h3>
                        <p>
                            Desenvolvimento de aplicações web utilizando HTML, CSS e JavaScript, 
                            sempre atento à responsividade e funcionalidade.
                
                            Bom domínio de CSS e atenção com boas prática de organização de
                            pastas no projeto.
                        </p>

                    </StackAbilities>
                    <StackAbilities>
                        <h3>Back-end</h3>
                        <p>
                            Aplicações utilizando NodeJS, TypeScript e MySQL. 
                            Criação de API's para comunicação com front-end, seguindo 
                            princípios de Clean Code
                        </p>                        
                    </StackAbilities>
                </SkillsWrapper>
            </Section>
        );
    }
}

export default Skills;