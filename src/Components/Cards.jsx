import React from 'react'
import { Link } from "react-router-dom"
import fiches from "../Data/Logements.json"
import "../Styles/Cards.css"

const arrayStars = [1, 2, 3, 4, 5]

const Cards = () => {
    return (
        <div className="Logements">

            {/* liste la base de données */}
            {fiches.map((fiches) => {
                const { id, cover, title } = fiches;

                // affiche la fiche logement sur la page d'accueil
                return (
                    <div className="fiche-Logement" key={id}>
                        <Link to={`/Card/${id}`}>
                            <img src={cover} alt={title} />
                            <h3>{title}</h3>
                        </Link>
                    </div>
                )
            })}
        </div>
    )
}

export default Cards