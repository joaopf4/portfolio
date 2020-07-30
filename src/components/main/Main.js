import React from 'react';
import {MainGrid,
    MainBody} from './styled';
import SobreMim from '../cvSections/SobreMim/SobreMim';
import Educação from '../cvSections/Educação/Educação';
import Habilidades from '../cvSections/Habilidades/Habilidades';
import Experiencias from '../cvSections/Experiências profissionais/Experiencias';

    class Main extends React.Component {
        render() {
            return (
                <MainBody>
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