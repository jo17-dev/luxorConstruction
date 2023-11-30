import './img.css';
/**
 * 
 * @param {link, alt?} props 
 * @returns img
 */

const Img = (props)=>{
    return (
        <>
        <img src={props.link} alt={props?.alt || "image description"} className={props?.className} />
        </>
    );
}

export default Img;