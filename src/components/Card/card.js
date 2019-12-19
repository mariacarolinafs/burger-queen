import React from 'react'


function Card(props) {
    return (
        <section onClick={props.handleClick} class="menu-card" value={props.state} id={props.id} placeholder={props.placeholder}>
            <p>{props.name}</p>
            <p>{props.price}</p>
        </section>
    )
}

export default Card