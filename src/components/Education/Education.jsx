import React from 'react';
import {EducCard, EducCardsWrapper} from './styled';
import Section from '../Section'
import {theme} from "../../Theme";

class Educação extends React.Component {
    render() {
        return (
            <Section 
            id="education"
            title="Educação" 
            bgColor={theme.lowpacityBlue} 
            textColor={theme.darkBlue}
            >
                <EducCardsWrapper>
                    <EducCard>
                        <h4>Graduação - Publicidade e Propaganda</h4>
                        <p>
                        PUC - Minas 2010 -2014
                        </p>
                        <p>
                            Fundamental formação para meu senso estético e crítico de peças gráficas
                        </p>

                    </EducCard>
                    <EducCard>
                        <h4>Programa<a href="https://gama.academy/" target="blank"> Gama Academy</a></h4>
                        <p> XP 28 Belo Horizonte - 11/2019</p>                        
                        <p> 
                            Programa de imersão de 4 semanas de treinamento de habilidades ténicas e sensíveis demandas 
                            no mercado de startUps, através de conteúdo online e projetos práticos em equipe. 
                        </p>                        
                    </EducCard>
                    <EducCard>
                        <h4>Curso Web Full-Stack <a href="https://www.labenu.com.br" target="blank">Labenu</a></h4>
                        <p>Curso de Desenvolvimento Web Full-Stack - 1º semestre 2020</p>                        
                        <p>
                            Curso completo de desenvolvimento web, com duração de 6 meses em tempo integral, 
                            somando mais de 1000 horas de código, com aulas práticas e em tempo real (via-online).
                            Entre o conhecimento passado se destacam as tecnologias de React, JavaScript e NodeJS.                                 
                        </p>                        
                    </EducCard>
                </EducCardsWrapper>
            </Section>
        );
    }
}
export default Educação;