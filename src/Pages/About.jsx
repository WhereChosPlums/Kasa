import Spacement from '../Components/Spacement' 
import Navbar from"../Components/Navbar"
import Banner from '../Components/Banner'
import Dropdown from "../Components/Dropdown";
import Footer from"../Components/Footer"
import "../Styles/About.css"

function About() {
    // contenu qui sera affiché dans les Dropdown
    const fiabilite = "Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes."
    const respect   = "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."
    const service   = "Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question."
    const securite  = "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes."
    return (
        <div className="About"> 
             <Spacement>
            <Navbar />
            <Banner>
                    <div className="banner2 banner-commun"></div>
                </Banner>
                <div className='about-title'>
                <div><Dropdown title="Fiabilité" content={fiabilite} /></div>
                    <div><Dropdown title="Respect" content={respect} /></div>
                    <div><Dropdown title="Service" content={service} /></div>
                    <div><Dropdown title="Sécurité" content={securite} /></div>
                </div>
                </Spacement>
            <Footer />
        </div>
    );
} 
 export default About; 