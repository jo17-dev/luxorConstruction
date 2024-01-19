import Header from "../containers/Header/Header";
import Img from "../components/Img/Img";
import { Button } from "../components/Forms/Button/Button";
import { Section } from "../containers/Section/Section";
import ServiceCard from "../components/ServiceCard/ServiceCard";
import { DescriptionCard } from "../components/DesctiptionCard/DescriptionCard";
import './home.css';
import Form from "../containers/Form/Form";
import Footer from "../containers/Footer/Footer";
import FacebookSvg from "../components/svgs/Facebook/FacebokSvg";
import InstagramSvg from "../components/svgs/Instagram/InstagramSvg";
import LinkedInSvg from "../components/svgs/LinkedIn/LinkedInSvg";
import PhoneSvg from "../components/svgs/Phone/PhoneSvg";
import WhatsappSvg from "../components/svgs/Whatsapp/WhatsappSvg";

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
            <Section className="section">
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
                        title="Nos solutions"
                        description="Chez luxor, nous proposons un ensemble complet de solutions de génie civil"
                        className="service-intro"
                    />
                    <ServiceCard
                        type="service-item"
                        title="Construction résidentielle:"
                        description="De la conception à la livraison, notre équipe spécialisée en 
                                    construction résidentielle se concentre sur la création d'espaces qui non
                                    seuleument répondent à vos besoins mais reflete également votre vision."
                        className="service-item"
                    />
                    <ServiceCard
                        type="service-item"
                        title="Projets commerciaux: "
                        description="Nous sommes spécialistes de la construction civile pour des projets commerciaux.
                                    Avec qualité et innovation, nous transformons vos idées en projets exceptionnels."
                        className="service-item"
                    />
                    <ServiceCard
                        type="service-item"
                        title="Infrastructures urbaines : "
                        description="Nous construisons les fondations de la ville avec une expertise en infrastructures
                                    urbaines. L'innovation, la durabilité et le progrès définissent notre engagement
                                    envers l'avenir."
                        className="service-item"
                    />
                    <ServiceCard
                        type="service-item"
                        title="Réhabilitation et restauration"
                        description="Nous restauront et restructurons des bâtiements. préserver le passé et préparer l'avenir.
                                    Nous transformons les espaces avec espertise et respect de l'histoire."
                        className="service-item"
                    />
                    <ServiceCard
                        type="service-item"
                        title="Conseil technique"
                        description="Nous proposons des conseils techniques spécialisés e construction civile.
                                    Nos connaissances et notre expérience sont la base de la réussite de votre projet."
                        className="service-item"
                    />
                </div>
            </Section>
            <h1 className="special-title" id="nos-clients">Certains de nos clients</h1>
            <div className="service-container section-flex client-container">
                <DescriptionCard
                    imgLink="/images/londrina-logo.jpg"
                    className="client-item"
                />
                <DescriptionCard
                    imgLink="/images/hastam-logo.jpg"
                    className="client-item"
                />
                <DescriptionCard
                    imgLink="/images/raul-fulgencio-logo.jpg"
                    className="client-item"
                />
            </div>
            <div className="contact-section-container">
                <Section idSection="contact">
                    <h1 className="special-title">Contact</h1>
                    <div className="contact-container">
                        <div className="form-container">
                            <Form/>
                        </div>
                        <div>
                            <h3>Contactez nous</h3>
                            <p>Grâce au canal du service client, nous sommes disponibles pour vous servir de la meilleur façon</p> <br />
                            <h3>Nos contacts</h3>
                            <p> <PhoneSvg width="20" height="20" stroke="white" /> (00)000 000 0000</p>
                            <p> <WhatsappSvg width="20" height="20" stroke="white" /> (00)000 000 0000</p>
                            <p>luxor@contato.com.br</p> <br />
                            <h3>Suivez nous</h3>
                            <div className="social-links">
                                <FacebookSvg width="40" height="40" fill="white" stroke="white" /> 
                                <InstagramSvg width="40" height="40" fill="white" stroke="orange"/>
                                <LinkedInSvg width="40" height="40" fill="white" />
                            </div>
                        </div>
                    </div>
                </Section>
            </div>
            <Footer/>
        </>
    )
}

export default Home;