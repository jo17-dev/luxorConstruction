import Img from '../Img/Img';
import './descriptioncard.css';
/**
 * 
 * @param {imgLink, title, text} props 
 * @returns 
 */
export const DescriptionCard = (props)=>{
    return(
        <div className={props.className || 'description-card'}>
            <Img link={props.imgLink} />
            <h3>{props?.title}</h3> <br />
            <span> {props?.text} </span>
        </div>
    )
}