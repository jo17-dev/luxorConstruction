import Img from '../../components/Img/Img';
import './descriptioncard.css';

export const DescriptionCard = (props)=>{
    return(
        <div className='description-card'>
            <Img link={props.imgLink} />
            <h3>{props.title}</h3> <br />
            <span> {props.text} </span>
        </div>
    )
}