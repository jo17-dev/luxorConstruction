import Img from "../../components/Img/Img";
import "./footer.css";
import FacebookSvg from "../../components/svgs/Facebook/FacebokSvg";
import InstagramSvg from "../../components/svgs/Instagram/InstagramSvg";
import LinkedInSvg from "../../components/svgs/LinkedIn/LinkedInSvg";

const Footer = ()=>{
    let iconsSize = "25";
    let iconsColor = "#a93f0b";
    return (
        <div className="footer-container">
        <footer className="footer">
            <div className="column">
                <Img link="/images/logo.png" />
                <h3>Constructions</h3>
            </div>
            <div className="column">
                <h3>Menu</h3>
                <p>Acceuil</p>
                <p>QUi nous somme</p>
                <p>Partenaires</p>
                <p>Contact</p>
            </div>
            <div className="column">
                <h3>Contacts</h3>
                <p>(00) 000 000 0000</p>
                <p>(00) 000 000 0000</p>
                <p>groupo@contacto.com.br</p>
                <div className="social-links">
                    <FacebookSvg width={iconsSize} height={iconsSize} fill={iconsColor} stroke={iconsColor} /> 
                    <InstagramSvg width={iconsSize} height={iconsSize} fill={iconsColor} stroke={iconsColor}/>
                    <LinkedInSvg width={iconsSize} height={iconsSize} fill={iconsColor} />
                </div>
            </div>
            <div className="column">
                <h3>Localisation</h3>
                <Img link="/images/localisation.jpg" className="localisation" />
                <p>Rue ste catherine, 0000</p>
            </div>
        </footer>
        </div>
    )
}

export default Footer;