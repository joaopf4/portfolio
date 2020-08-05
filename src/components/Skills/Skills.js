import React from 'react';
import {Section, SectionHeader, StackAbilities, SectionText} from './styled';

    class Skills extends React.Component {
        render() {
            return (
                <Section id="skills">
                    <SectionHeader>Habilidades técnicas</SectionHeader>
                        <SectionText>
                            <StackAbilities>
                                <h1>Front-end</h1>
                                <p>
                                    Desenvolvimento de aplicações web utilizando HTML, CSS e JavaScript, 
                                    sempre atento à responsividade e funcionalidade.
                                </p>
                                <p>
                                    Facilidade e habilidade em debugar estilização, atenção sempre a boa organização de
                                    pastas no projeto front-end.
                                </p>

                            </StackAbilities>
                            <StackAbilities>
                                <h1>Back-end</h1>
                                <p>
                                    Aplicações utilizando NodeJS, TypeScript e MySQL. 
                                    Criação de API's para comunicação com front-end, seguindo 
                                    princípios de Clean Code
                                </p>                        
                            </StackAbilities>
                        </SectionText>
                </Section>


                );
            }
          }

          export default Skills;