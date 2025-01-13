import React, { useEffect, useState, useRef } from 'react'

function UseRef() {

  //useRef is a react hook that allow us to create mutable variables, which will not re-render the component
  //useRef is also used for accessing DOM elements

    // const [value,setValue] = useState(0);
    // const count = useRef(0);

    // console.log(count);
    
    
    // useEffect(()=>{
    //   // setCount(prev => prev+1)
    //   count.current = count.current+1;
    // });

    const inputElement = useRef();

    const btnClicked = ()=>{
      console.log(inputElement.current);
      inputElement.current.style.background = "orange"
    }

  return (
    <div>
      {/* <button onClick={()=>{setValue(prev => prev-1)}}>-1</button>
      <h1>{value}</h1>
      <button onClick={()=> setValue(prev => prev+1)}>+1</button>

      <h1>Render Count: {count.current} </h1> */}

      <input type="text" ref={inputElement} />
      <button onClick={btnClicked}>Click Here</button>
    </div>
  )
}

export default UseRef
