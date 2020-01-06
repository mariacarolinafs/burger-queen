import React from 'react';
import { Link } from "react-router-dom"
import '../Nav/nav.css'
import Logo from './bq_logo.png';

function Nav () {
    return(
        <div class="nav">
            <div class="logo">
                <img src={Logo} alt="logo" width={"190px"} />
            </div>
            <nav>
            <ul>
                <li>
                    <Link to="/service">Restaurante</Link>
                </li>
                <li>
                    <Link to="/kitchen">Cozinha</Link>
                </li>
            </ul>
            </nav>
        </div>
    )
}

export default Nav