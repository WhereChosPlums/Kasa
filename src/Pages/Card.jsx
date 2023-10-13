import React, { useState } from 'react';
import { useParams} from 'react-router-dom';

import Spacement from '../Components/Spacement';
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import Dropdown from "../Components/Dropdown";
import Carousel from '../Components/Carousel'
import Error404 from "../Pages/Error404"

import "../Styles/Card.css"

import fiches from "../Data/Logements.json";

const arrayStars = [1, 2, 3, 4, 5]

function Card() {
    // récupère l'ID de l'URL
    const idLogement=useParams();


    console.log("ID récupéré de l'URL:", idLogement);
    console.log(fiches)

    // cherche l'id dans le fichier logements.json
    const fiche = fiches.find(logement => logement.id === idLogement.id);
    console.log(fiche)

    if (!fiche) return(<Error404 />)

    // récupère la liste des équipements
    const equipements = fiche && fiche.equipments ? fiche.equipments.map((element, index) => (
        <li className='description-content' key={"equip-" + index.toString()}>{element}</li>
    )) : [];

    return (
        <div className="Card">
            <Spacement>
                <Navbar />
                
                <Carousel pictures={fiche.pictures}/>
                {/*   Affiche le titre et la zone du logement*/}
                <div className='ficheLogement'>
    <div className='div-description'>
        <h1>{fiche.title}</h1>
        <h4>{fiche.location}</h4>
        <div className='div-tags'>
            { fiche.tags && fiche.tags.map((element, index) => {
                return(<p className='tags' key={"tags-"+index}>{element}</p>)
            })}
        </div>
    </div>

    {/*   Affiche le nom du propriétaire et sa photo */}
    <div className='bloc-stars'>
        {fiche.host && (
            <div className='div-etoiles'>
                <p>{fiche.host.name}</p>
                <img src={fiche.host.picture} alt={fiche.title} />
            </div>
        )}
        
        
        {/*   Met et colorie les étoiles */}
        <div className='stars'>
            {
                arrayStars.map(element => {
                    const nbreEtoiles = parseInt(fiche.rating)
                    return(<span key={"star-"+element} className={element <= nbreEtoiles ? 'span1' : 'span2'}>★</span>)
                })
            }
        </div>
    </div>
</div>




      
                 {/* affiche la description et les équipements , Le contenu ne s'affiche pas*/}
                 <div className='DropdownLogement'>
                  <Dropdown title="Description" content={fiche.description} />
                 <Dropdown title="Equipements" content={equipements} />
        
                </div>
                
            </Spacement>
            <Footer />
        </div>
    );
}

export default Card;
