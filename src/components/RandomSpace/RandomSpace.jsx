import React from "react";
import { useNavigate } from 'react-router-dom'
import '../RandomSpace/RandomSpace.css'
import data from '../../data.json'

function RandomSpace() {
    const history = useNavigate();
    return (
        <button  className="nav-link" onClick={(e) => {
            const id = Math.floor(Math.random() * data.length);
            history(`/details/${id}`)
        }}> Show a random </button>
    )
}

export default RandomSpace