import React, { useState } from 'react';
import FlecheGauche from "../Assets/FlecheGauche.png";
import FlecheDroite from "../Assets/FlecheDroite.png";
import "../Styles/Carousel.css";

function Carousel({ pictures }) {
    const [index, setIndex] = useState(0);
    const totalPictures = pictures.length - 1;

    const nextSlide = () => {
        if (index >= totalPictures) {
            setIndex(0);
        } else {
            setIndex(index + 1);
        }
    };

    const prevSlide = () => {
        if (index <= 0) {
            setIndex(totalPictures);
        } else {
            setIndex(index - 1);
        }
    };

    return (
        <div className="carousel-container">
            <button onClick={prevSlide} className="carousel-button">
                <img src={FlecheGauche} alt="Précédent" />
            </button>
            <img src={pictures[index]} alt={`Slide ${index + 1}`} className="carousel-image" />
            <button onClick={nextSlide} className="carousel-button">
                <img src={FlecheDroite} alt="Suivant" />
            </button>
        </div>
    );
}

export default Carousel;
