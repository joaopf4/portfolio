import React from 'react';
import { MainBody} from './styled';
import SobreMim from '../AboutMe';
import Educação from '../Education';
import Habilidades from '../Skills';
import Projetos from '../Projects';
import Contato from '../Contact';
import Footer from '../Footer';
import MainSection from '../MainSection';

class Main extends React.Component {
    render() {
        return (
            <MainBody>
                <MainSection/>
                <SobreMim/>
                <Habilidades/>    
                <Educação/>
                <Projetos/>
                <Contato/>
                <Footer/>
            </MainBody>
            );
        }
    }

export default Main;