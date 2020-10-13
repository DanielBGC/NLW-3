import React from 'react';
import { FiArrowRight } from 'react-icons/fi'

import "./styles/global.css"
import "./styles/pages/landing.css"

import logo from "./assets/logo.svg"

function App() {
  return (
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

        <a href="" className="enter-app">
          <FiArrowRight size={26} color="rgba(0, 0, 0, 0.8)" />
        </a>
      </div>
    </div>
  );
}

export default App;
