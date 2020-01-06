import React from 'react'


function Card(props) {
    return (
        <section onClick={props.handleClick} class="menu-card" value={props.state} id={props.id} placeholder={props.placeholder}>
            <p class="name">{props.name}</p>
            <p class="price">{props.price.toLocaleString('pt-BR')}</p>
        </section>
    )
}

export default Card