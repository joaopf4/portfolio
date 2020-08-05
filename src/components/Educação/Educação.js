import React from 'react';
import {Section, SectionHeader, StackAbilities, SectionText} from './styled';

    class Educação extends React.Component {
        render() {
            return (
                <Section id="educacao">
                <SectionHeader>Educação</SectionHeader>
                    <SectionText>
                        <StackAbilities>
                            <h1>Graduação - Publicidade e Propaganda</h1>
                            <p>
                            PUC - Minas 2010 -2014
                            </p>
                            <p>
                                Fundamental formação para meu senso estético e crítico de peças gráficas
                            </p>

                        </StackAbilities>
                        <StackAbilities>
                            <h1>Programa <a href="https://gama.academy/" target="blank">Gama Academy</a></h1>
                            <p> XP 28 Belo Horizonte - 11/2019</p>                        
                            <p> Programa de treinamento intensivo de habilidades técnicas e sensíveis para o mercado digital</p>                        
                        </StackAbilities>
                        <StackAbilities>
                            <h1>Curso Web Full-Stack <a href="https://www.labenu.com.br" target="blank">Labenu</a></h1>
                            <p>Curso de Desenvolvimento Web Full-Stack - 1º semestre 2020</p>                        
                            <p>
                                Curso completo de desenvolvimento web, com duração de 6 meses em tempo integral, 
                                somando mais de 1000 horas de código, com aulas práticas e em tempo real (via-online).
                                Entre o conhecimento passado se destacam as tecnologias de React, JavaScript e NodeJS.                                 
                            </p>                        
                        </StackAbilities>
                    </SectionText>
                </Section>
                );
            }
          }
export default Educação;