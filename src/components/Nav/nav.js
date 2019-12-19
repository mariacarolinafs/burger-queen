import React from 'react';
import { Link } from "react-router-dom"

function Nav () {
    return(
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
    )
}

export default Nav