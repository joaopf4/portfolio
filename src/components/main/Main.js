import React from 'react';
import {MainGrid,
    MainBody} from './styled';
import {IconLinks} from '../generalComps/styled'
import SobreMim from '../cvSections/SobreMim/SobreMim';
import Educação from '../cvSections/Educação/Educação';
import Habilidades from '../cvSections/Habilidades/Habilidades';
import Experiencias from '../cvSections/Experiências profissionais/Experiencias';

    class Main extends React.Component {
        render() {
            return (
                <MainBody>
                    
        <IconLinks href='http://www.instagram.com/joaopfa' target="blank"><i class="fab fa-instagram"></i> </IconLinks>
        <IconLinks href='http://www.linkedin.com/in/joaopfa' target="blank"><i class="fab fa-linkedin"></i></IconLinks>
        <IconLinks href='https://github.com/joaopf4' target="blank"><i class="fab fa-github"></i></IconLinks>
        <IconLinks href='http://www.instagram.com/joaopfa' target="blank"><i class="fas fa-envelope"></i></IconLinks>

                    <MainGrid>
                        <SobreMim/>
                        <Educação/>
                        <Habilidades/>
                        <Experiencias/>
                    </MainGrid>
                </MainBody>
                );
            }
          }

          export default Main;