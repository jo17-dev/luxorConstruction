import Header from "../containers/Header/Header";
import Img from "../components/Img/Img";
import { Button } from "../components/Forms/Button/Button";
import { Section } from "../containers/Section/Section";
import './home.css';

const Home = ()=> {
    return(
        < >
            <Header/>
            <div id="home">
                <div className="side-section">
                    <h1 id="home-caption-title">Construire avec qualité et sécurité</h1>
                    <br />
                    <h1 id="home-caption-text">Luxor a plus de 20 ans d'expérience en génie civil</h1>
                    <br />
                    <Button value="demandez votre devis" />
                </div>
                <div className="side-section">
                    <Img link="/images/casqueFinal.png " />
                </div>
            </div>
            <Section idSection="avantages" className="avantage-section" />
            <Section idSection="qui-nous-sommes" className="big-section" />

        </>
    )
}

export default Home;