import React from 'react';
import '../CardDetails/CardDetails.css'
import data from '../../data.js'
import { useParams } from "react-router-dom"

function CardDetails(props) {
    const { id } = useParams();
    const { images, title, desc, hours, geo } = data[id];

  return (
    <div className='CardDetails'>
        <div className='CardDetails-image'>
            <img  alt="imag" src={`${process.env.PUBLIC_URL}images/${images[0]}`} />
        </div>
        <div className='CardDetails-info'>
            <h1 className='CardDetails-title'>{ title }</h1>
            <p className='CardDetails-desc'>{ desc }</p>
            <p className='CardDetails-hours'>Please call: { hours }</p>
            {/* <p className='CardDetails-features'>{ features }</p> */}
            <p className='CardDetails-infgeoo'> Geo:{ geo.lat } { geo.lon }</p>
        </div>
    </div>
  )
}

export default CardDetails