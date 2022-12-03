import React from 'react';
import './CardSpace.css'



function CardSpace(props) {
    const {name, image, result} = props;
    return (
    <div className='CardSpace'>
        <img 
        src={`${process.env.PUBLIC_URL}images/${image}`} 
        width="300" 
        height="300" 
        alt="Type of parameter"/>
        <h1>{name}</h1>
        <div>{result}</div>
    </div>
    )
}

export default CardSpace