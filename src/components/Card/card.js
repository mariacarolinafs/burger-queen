import React from 'react'


function Card(props) {
    return (
        <section onClick={props.handleClick} >
            <p>{props.name}</p>
            <p>{props.price}</p>
        </section>
    )
}

export default Card