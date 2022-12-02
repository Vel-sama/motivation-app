import React from 'react';



function CardSpace(props) {
    const {name, image, result} = props;
    return (
    <div>
        <img 
        // src={`${process.env.PUBLIC_URL}images/${image}`} 
        src={`${process.env.PUBLIC_URL}images/${image}`} 
        width="300" 
        height="300" 
        alt="Type of parameter"/>
        <img src="" alt="" />
        <h1>{name}</h1>
        <div>{result}</div>
    </div>
    )
}

export default CardSpace