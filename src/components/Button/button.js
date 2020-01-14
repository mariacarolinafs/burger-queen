import React from 'react';
import '../Button/button.css'

const Button = (props) => {
    return (
        <button onClick={props.handleClick} className='button'>{props.text} </button>
    );
}

export default Button;