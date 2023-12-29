import Img from "../../components/Img/Img";
import "./footer.css";

const Footer = ()=>{
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