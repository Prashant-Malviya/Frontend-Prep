import React from 'react'
import { useNumber } from '../context/NumberContext';

function Headers() {
    console.log("header rendered");

    const {number} = useNumber();
    
  return (
    <div>
      <h2>Header</h2>
      <h2>My Number is {number}</h2>
    </div>
  )
}

export default React.memo(Headers)
