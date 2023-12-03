import Header from "../containers/Header/Header";
import Img from "../components/Img/Img";
import { Button } from "../components/Forms/Button/Button";
import { Section } from "../containers/Section/Section";
import ServiceCard from "../components/ServiceCard/ServiceCard";
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
            <Section idSection="services" className="section">
                <Button value="Demandez votre devis" className='devis-btn' />
            </Section>
            <Section idSection="qui-nous-sommes" className="big-section">
                <aside className="left">
                    <Img link="/images/structure-metallique-batiment.jpg" className="aisde-img" />
                    <Img link="/images/plans-en-main.png" className="aisde-img" />
                </aside>
                <aside className="right">
                    <h3>Notre histoire</h3>
                    <h2>Qui nous somme :</h2>
                    <p>
                        Depuis plus de deux décennies, Luxor Construtora est synonyme d'excellence 
                        dans le secteur de la construction. Depuis notre création en 1990, nous avons consacré
                         notre passion et notre expertise à réaliser des projets de construction exceptionnels,
                          construisant non seulement des structures solides, mais également des communautés pros
                          pères.
                    </p> <br />
                    <p>
                        Notre équipe talentueuse et notre engagement inébranlable envers la qualité ont fait de 
                        nous un nom de confiance dans l'industrie, et notre vision de l'avenir nous pousse à 
                        continuer d'innover, de nous développer et de contribuer à un monde construit avec soin, 
                        éthique et excellence. Rejoignez-nous dans le voyage pour construire un avenir meilleur, 
                        un projet de construction pour chacun
                        tourner
                    </p>
                </aside>
            </Section>
            <Section className="section">
                <Button value="Demandez votre devis" className='devis-btn' />
            </Section>
            <Section idSection="services" className="big-section orange-bg section-flex">
                <div className="service-container section-flex">
                    <ServiceCard
                        type="label"
                        title="Construction résidentielle"
                        description="description de la construction résidentielle"
                        className="service-intro"
                    />
                    <ServiceCard
                        type="service-item"
                        title="Construction résidentielle"
                        description="description de la construction résidentielle"
                        className="service-item"
                    />
                    <ServiceCard
                        type="service-item"
                        title="Construction résidentielle"
                        description="description de la construction résidentielle"
                        className="service-item"
                    />
                </div>
            </Section>

        </>
    )
}

export default Home;