import React from 'react'


function Card(props) {
    return (
        <div onClick={props.handleClick} class="menu-card" value={props.state} id={props.id} placeholder={props.placeholder}>
            <p class="name">{props.name}</p>
            <p class="price">{props.price.toLocaleString('pt-BR')}</p>
            <img src={props.image} class="image"/>
        </div>
    )
}

export default Card