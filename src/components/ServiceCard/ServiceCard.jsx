import './servicecard.css';
import Img from '../Img/Img';
import ShopSvg from '../svgs/shop/ShopSvg';

const ServiceCard = (props)=>{

    let serviceItem = (
        <div className='text-container'>
            <h3> {props.title} </h3>
            <p> {props.description} </p>
        </div>
    );

    let serviceIntro = (
        <div>
            <ShopSvg color="white" width="70px" height="70px"/>
            <h1> {props.title} </h1>
            <br />
            <p> {props.description} </p>
        </div>
    )
    return(
        props?.type == "service-item" ?
        <div className={props?.className} > {serviceItem} </div>
        :
        <div className={props?.className}> {serviceIntro} </div> 
    )
}

export default ServiceCard;