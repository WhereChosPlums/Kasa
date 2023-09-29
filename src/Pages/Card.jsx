import React, { useState } from 'react';
import { useSearchParams } from 'react-router-dom';

import Spacement from '../Components/Spacement';
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import Carousel from "../Components/Carousel";
import Dropdown from "../Components/Dropdown";

import "../Styles/Card.css"

import fiches from "../Data/Logements.json";

const arrayStars = [1, 2, 3, 4, 5]

function Card() {
    // récupère l'ID de l'URL
    const [searchParams] = useSearchParams();
    const [idLogement] = useState(searchParams.get('_id'));

    console.log("ID récupéré de l'URL:", idLogement);

    // cherche l'id dans le fichier logements.json
    const fiche = fiches.find(element => element.id === idLogement);

    // récupère la liste des équipements
    const equipements = fiche && fiche.equipments ? fiche.equipments.map((element, index) => (
        <li className='description-content' key={"equip-" + index.toString()}>{element}</li>
    )) : [];

    return (
        <div className="Card">
            <Spacement>
                <Navbar />
                
                
                {/*   Affiche le titre et la zone du logement*/}
                <div className='ficheLogement'>
    <div className='div-description'>
        <h1>{fiches.title}</h1>
        <h4>{fiches.location}</h4>
        <div className='div-tags'>
            { fiches.tags && fiches.tags.map((element, index) => {
                return(<p className='tags' key={"tags-"+index}>{element}</p>)
            })}
        </div>
    </div>

    {/*   Affiche le nom du propriétaire et sa photo */}
    <div className='bloc-stars'>
        {fiches.host && (
            <div className='div-etoiles'>
                <p>{fiches.host.name}</p>
                <img src={fiches.host.picture} alt={fiches.title} />
            </div>
        )}
        
        
        {/*   Met et colorie les étoiles */}
        <div className='stars'>
            {
                arrayStars.map(element => {
                    const nbreEtoiles = parseInt(fiches.rating)
                    return(<span key={"star-"+element} className={element <= nbreEtoiles ? 'span1' : 'span2'}>★</span>)
                })
            }
        </div>
    </div>
</div>




      
                 {/* affiche la description et les équipements , Le contenu ne s'affiche pas*/}
                 <div className='DropdownLogement'>
                 {fiche && <Dropdown title="Description" content={fiche.description} />}
                     <Dropdown title="Equipements" content={equipements} />
                    <Dropdown title="Equipements" content={equipements} />
                </div>
                
            </Spacement>
            <Footer />
        </div>
    );
}

export default Card;
