import React, { useState }from 'react';
import './CardList.css';
import CardSpace from '../CardSpace/CardSpace';
import data from '../../data.js';

function CardList() {
  const [ query, setQuery ] = useState('')
  const spaces = data.filter((obj) => {
    const inTitle = obj.title.toLowerCase().includes(query.toLowerCase());
    const inAddress = obj.address.toLowerCase().includes(query.toLowerCase());
    return inTitle || inAddress
  }).map(({title, address, images, hours, id}) => {

    return (
      <CardSpace
        id = {id}
        key = {`${title}-${id}`}
        name={title}
        address={address}
        image={images[0]}
        hours = {hours}
      />
    )
  })

  return (
    <div className="CardList">
      <form>
        <input 
          value={query}
          placeholder="seacrh"
          onChange={(e) => setQuery(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
      { spaces }
    </div>
  )
}

export default CardList