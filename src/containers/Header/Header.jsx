import NavLink from "../../components/Header/NavLink";
import Img from "../../components/Img/Img";
import './header.css';

const Header = ()=>{
    const createTextLink = (text, link='#')=> { return{text, link}};
    const navData = [
        createTextLink("Acceuil"),
        createTextLink("Nous sommes", "#qui-nous-sommes"),
        createTextLink("Services", "#services"),
        createTextLink("Partenaires", "#nos-clients"),
        createTextLink("Contact", "#contact")
    ];

    return (
        <div className="header">
            <Img link="/images/logo.png" className="logo" />
            <ul className="nav-bar">
                { navData.map((item, index)=> <NavLink text={item.text} href={item.link} key={index} />) }
            </ul>
        </div>
    )
}

export default Header;