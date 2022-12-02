import React from 'react';
import CardSpace from '../CardSpace/CardSpace';

function TypeCard() {
  return (
    <div>
        <CardSpace
          name="Money"
          result="3*"
          image="50-california-st.jpg"
        />
        <CardSpace
          name="Health"
          result="4*"
          image="50-california-st.jpg"
        />
        <CardSpace
          name="Family"
          result="5*"
          image="50-california-st.jpg"
          />
    </div>
  )
}

export default TypeCard