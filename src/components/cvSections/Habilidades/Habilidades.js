import React from 'react';
import {CardHeader, CardContents, Abilities, AbilitiesGroup} from '../styled';

    class Habilidades extends React.Component {
        render() {
            return (
                        <CardContents>
                            <CardHeader>Habilidades técnicas</CardHeader>
                            <AbilitiesGroup>
                                <Abilities>JavaScript</Abilities>
                                <Abilities>HTML | CSS</Abilities>
                                <Abilities>ReactJS</Abilities>
                                <Abilities>Photoshop</Abilities>
                                <Abilities>Excel</Abilities>
                                <Abilities>GitHub</Abilities>
                                <Abilities>NodeJS</Abilities>
                                <Abilities>TypeScript</Abilities>
                                <Abilities>Illustrator</Abilities>
                                <Abilities>SQL</Abilities>
                            </AbilitiesGroup>
                        </CardContents>


                );
            }
          }

          export default Habilidades;