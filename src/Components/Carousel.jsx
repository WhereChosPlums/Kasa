import React, { useState } from 'react';
import FlecheGauche from "../Assets/FlecheGauche.png";
import FlecheDroite from "../Assets/FlecheDroite.png";
import "../Styles/Carousel.css";

function Carousel({pictures}) { //reçois un tableau avec les URL des images

    const [index, setIndex] = useState(0)  // variable de compteur, défini au départ sur 0
    const totalPictures = pictures.length-1 // nombre max d'images

    if (index < 0) setIndex(totalPictures)  // inférieur à zéro, défini le nombre d'images max
    if (index > totalPictures) setIndex(0)  // supérieur au max d'images, alors met à zéro
    
    return(
        <div className='carousel'>

            {/* affiche la première image */}
            <div className='div-image'>  
                <img src={pictures[index]} className="classImage" key={"car-"+index} alt={"photo "+index} />
            </div>

            {/* si plus d'une image, le code sera exécuté */}
            {totalPictures > 0 && ( 
                <div> {/* les boutons pour les fleches droites et gauche, servent pour changer d'image au sein du Carousel */}
                    <button onClick={() => setIndex(index - 1)}>
                        <img src={FlecheGauche} className='flechegauche' alt={'flèche gauche pour changer de photo '+index} />
                    </button>
                    <button onClick={() => setIndex(index + 1)}>
                        <img src={FlecheDroite} className='flechedroite' alt={'flèche droite pour changer de photo '+index} />
                    </button>
                </div>
            )}
        </div>
    )
}

export default Carousel


