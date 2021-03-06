import React from 'react';
import { Link } from "react-router-dom"
import '../Nav/nav.css'
import Logo from './burger_queen.png';

function Nav() {
    return (
        <div className="nav">
            <div className="logo">
                <img src={Logo} alt="logo" width={"100px"} />
            </div>
            <nav>
                <ul>
                    <li>
                        <Link to="/service" className='link'>RESTAURANTE</Link>
                    </li>
                    <li>
                        <Link to="/kitchen" className='link'>COZINHA</Link>
                    </li>
                    <li>
                        <Link to="/delivery" className='link'>DELIVERY</Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Nav