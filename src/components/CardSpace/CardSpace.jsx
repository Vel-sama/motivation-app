import React from 'react';
import './CardSpace.css'


function CardSpace(props) {
    const {name, image, address, hours} = props;
    
    return (
    <div className='CardSpace'>
        <img src={`${process.env.PUBLIC_URL}images/${image}`} alt="Type of parameter"/>
        <h1>{name}</h1>
        <div>{address}</div>
        <div>{hours}</div>

    </div>
    )
}

export default CardSpace