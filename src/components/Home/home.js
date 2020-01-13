import React from 'react';
import { Link } from "react-router-dom"
import Card from '../Card/card.js'
//import '../Home/home.css'

function Home() {
    return (
        <div class="home">
            
                    <Link to="/service" className='link'>RESTAURANTE</Link>
                    <Link to="/kitchen" className='link'>COZINHA</Link>
                    
        </div>
    )
}

export default Home