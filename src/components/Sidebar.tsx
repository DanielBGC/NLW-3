import React from "react"
import mapMarkerImg from '../assets/map-marker.svg';
import { Link, useHistory } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";

import "../styles/components/sidebar.css"

const Sidebar = () => {
    const { goBack } = useHistory();
    return(
        <aside className="app-sidebar">
            <Link to="/">
                <img src={mapMarkerImg} alt="Happy" />
            </Link>

            <footer>
                <button type="button" onClick={goBack}>
                    <FiArrowLeft size={24} color="#FFF" />
                </button>
            </footer>
        </aside>
    )
}

export default Sidebar;