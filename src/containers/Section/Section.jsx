import './section.css';
import { DescriptionCard } from '../../components/DesctiptionCard/DescriptionCard';
import {Button} from '../../components/Forms/Button/Button';
import { Children } from 'react';

export const Section = (props)=>{
    if(props.idSection == "avantages"){
        return (
            <section id={props.idSection} className={props.className} >
                <DescriptionCard 
                    imgLink="/images/building.svg" 
                    title="Engagement d'échéance" 
                    text="Nous disposons de notre propre équipement qui augmente notre rapdité et notre éfficacité de mobilisation" 
                />
                <DescriptionCard 
                    imgLink="/images/bridge.svg" 
                    title="Efficacité et productivité"
                    text="Nous utilison des procedures de planification, de gestion de la construction et des processus de construction modernes" 
                />
                <DescriptionCard 
                    imgLink="/images/mountain.svg" 
                    title="Satisfraction grantie"
                    text="Nos ressouces sont adaptées à chaque type d'entreprise, quelque soir sa complexité" 
                />
            </section>
        )
    }

    return (
        <section id={props.idSection} className={props.className} >
            {props.children}
        </section>
    )
}
