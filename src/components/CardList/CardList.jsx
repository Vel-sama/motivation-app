import React from 'react';
import './CardList.css';
import CardSpace from '../CardSpace/CardSpace';
import data from '../../data.json';

function CardList() {

  const spaces = data.map(({title, address, images, hours}) => {

    return (
      <CardSpace
        key = {title}
        name={title}
        address={address}
        image={images[0]}
        hours = {`${new Date().getDay()} day of a week`}
      />
    )
  })

  return (
    <div className="CardList">
      { spaces }
    </div>
  )
}

export default CardList