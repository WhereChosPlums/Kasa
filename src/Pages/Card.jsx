import React, { useState } from 'react'
import { useSearchParams } from 'react-router-dom' 

import Spacement from '../Components/Spacement' 
import Navbar from"../Components/Navbar"
import Footer from"../Components/Footer"

import fiches from "../Data/Logements.json"


function Card() {
    // récupère l'ID de l'URL
    const [searchParams] = useSearchParams();
    const [idLogement] = useState(searchParams.get('_id'));
    
    // cherche l'id dans le fichier logements.json
    const fiche = fiches.find(element => element.id === idLogement)
    
 

    // récupère la liste des équipements
    const equipements = fiches.equipments.map((element, index) => (
          <li className='description-content' key={"equip-"+index.toString()}>{element}</li>
        ))
   
        return (
        <div className="Card"> 
         <Spacement>
              <Navbar />
              <Footer />
         </Spacement>
            
          
        </div>
    );
} 
 export default Card; 