import React from "react";
import { useNavigate } from 'react-router-dom'
import './RandomSpace.css'
import data from '../../data.json'
import { Button } from '@nextui-org/react'

function RandomSpace() {
    const history = useNavigate();
    return (
        <Button  className="show-random-button" onClick={(e) => {
            const id = Math.floor(Math.random() * data.length);
            history(`/details/${id}`)
        }}> Show a random </Button>
    )
}

export default RandomSpace