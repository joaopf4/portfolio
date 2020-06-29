import React from 'react';
import {MainGrid,
    MainBody} from './styled';
import SobreMim from '../cvSections/SobreMim/SobreMim';
import Educação from '../cvSections/Educação/Educação';
import Habilidades from '../cvSections/Habilidades/Habilidades';

    class Main extends React.Component {
        render() {
            return (
                <MainBody>
                    <MainGrid>
                        <SobreMim/>
                        <Educação/>
                        <Habilidades/>
                    </MainGrid>
                </MainBody>
                );
            }
          }

          export default Main;