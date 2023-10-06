import React, { useState } from 'react'
import FlecheHaut from "../Assets/FlecheHaut.png"
import FlecheBas from "../Assets/FlecheBas.png"
import "../Styles/Dropdown.css"

function Dropdown({title, content}) {
    // défini le collapse par défaut comme fermer
    const [contentVisible, setContentVisible] = useState(false)

    // à chaque clic sur le collapse, ca inverse la valeur pour  ouvert/fermer
    const affContent = () => { 
        setContentVisible(!contentVisible) // inverse la valeur actuelle
    }

    
    const DropdownContent = (contentVisible ? "visible" : "hidden") + " Dropdown"
    const DropdownChevron = (contentVisible ? FlecheHaut: FlecheBas)

    return (
        <div className='Dropdown'>

            {/* affiche le titre et le chevron */}
            <div className='Dropdown__header' onClick={affContent}>
                <span>{title}</span>
                <div className="chevronValue">
                    <img src={DropdownChevron} alt=""/>
                </div>
            </div>

            {/* affiche le contenu */}
            <div className={DropdownContent}>
                <ul>{content}</ul>
            </div>
        </div>
    )
}

export default Dropdown