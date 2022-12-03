import React from 'react'
import './Footer.css'

function Footer() {
    let currentDate = new Date().getFullYear()
  return (
    <div className='Footer'>
        <h3> {currentDate} Vladislavd Diachenko</h3>
        
    </div>
  )
}

export default Footer