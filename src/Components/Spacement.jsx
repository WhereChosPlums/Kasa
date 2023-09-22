import React from 'react'
import "../Styles/Spacement.css"

// composant qui gère la marge gauche et droite de 100% sauf le Footer, et wrappe le contenu enfant
function Spacement({children}) {
    return (
        <div className='spacement'>
            {children}
        </div>
    )
}

export default Spacement