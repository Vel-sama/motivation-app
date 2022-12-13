import React from 'react';
import './CardSpace.css'
import { Link } from 'react-router-dom'


function CardSpace(props) {
    const {name, image, address, hours, id} = props;
    
    return (
    <div className='CardSpace'>
        <Link to={`./details/${id}`}>
            <img src={`${process.env.PUBLIC_URL}images/${image}`} alt="Type of parameter" width="300" height="300"/>
        </Link>
        <h1>
        <Link className='CardSpace-title' to={`/details/${id}`}>
            {name}
        </Link>
</h1>
        <div className='CardSpace-info'>
            <div>{address}</div>
            <div>{hours}</div>
        </div>
        

    </div>
    )
}

export default CardSpace