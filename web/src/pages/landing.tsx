import React from 'react'
import { Link } from 'react-router-dom'
import { FiArrowRight } from 'react-icons/fi'

import "../styles/pages/landing.css"

import logo from "../assets/logo.svg"


function LandingPage() {
    return(
    <div id="landing-page">
        <div className="content-wrapper">
            <img src={logo} alt="Happy"/>

            <main>
                <h1>Leve felicidade para o mundo</h1>
                <p>Visite orfanatos e mude o dia de muitas crianças.</p>
            </main>

            <div className="location">
                <strong>Uberaba</strong>
                <span>Minas Gerais</span>
            </div>

            <Link to="/app" className="enter-app">
                <FiArrowRight size={26} color="rgba(0, 0, 0, 0.8)" />
            </Link>
        </div>
    </div>
    )
}

export default LandingPage