import './img.css';
/**
 * 
 * @param {link, alt?} props 
 * @returns img
 */

const Img = (props)=>{
    return (
        <>
        <img src={props.link} alt={props?.alt || "image description"}/>
        </>
    );
}

export default Img;