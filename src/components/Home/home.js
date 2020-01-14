import React from 'react';
import { Link } from "react-router-dom"
import '../Home/home.css'

function Home() {
    return (
        <div className="home">
            <div className='links'>
                <Link to="/service" className='link-home'>RESTAURANTE</Link>
                <Link to="/kitchen" className='link-home'>COZINHA</Link>
                <Link to="/delivery" className='link-home'>DELIVERY</Link>
            </div>
        </div>
    )
}

export default Home