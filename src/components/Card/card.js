import React from 'react'


function Card(props) {
    return (
        <div onClick={props.handleClick} class="menu-card" value={props.state} id={props.id} placeholder={props.placeholder}>
            <p className="name">{props.name}</p>
            <p className="price">{props.price.toLocaleString('pt-BR')}</p>
            <div className="div-image">
            <img src={props.image} className="image"/></div>
        </div>
    )
}

export default Card