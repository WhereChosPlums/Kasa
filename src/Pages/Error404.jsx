import React, { Fragment } from 'react'
import { Link } from "react-router-dom"
import Navbar from"../Components/Navbar"
import Footer from"../Components/Footer"
import Spacement from '../Components/Spacement' 

import "../Styles/Error.css"

function Error404() {
    return (
        <Fragment>
            <Spacement>
                <Navbar />
                <div className='error commun-error'>
                    <span>404</span>
                    <h4>Oups! La page que vous demandez n'existe pas.</h4>
                    <p><Link to="/">Retourner sur la page d’accueil</Link></p>
                </div>
            </Spacement>
            <Footer />
        </Fragment>
    )
}

export default Error404