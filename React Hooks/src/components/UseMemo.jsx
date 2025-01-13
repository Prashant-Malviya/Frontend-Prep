import React, { useState,useMemo } from 'react'

function UseMemo() {

// The React useMemo hook returns a memoized value. (it's like caching a value that it doesn't need to be recalculated)

//The useMemo Hook only runs when one of its dependencies gets updated

//This can improve the performance of the application. There is one more hook in react to improve the performance , that is useCallback hook.

//The useMemo and useCallback hooks are similar. The main difference is:
// - useMemo returns a memoized value.
// - useCallback returns a memoized function.

// useMemo is a React Hook that lets you cache the result of a calculation between re-renders.

// const cachedValue = useMemo(calculateValue, dependencies)

const [number,setNumber] = useState(0);

const [counter,setCounter] = useState(0);

function cubeNum(num){
    console.log("Calculation done!");
    return Math.pow(num,3);
    
}

// const result = cubeNum(number);
const result = useMemo(()=> cubeNum(number),[number]);

  return (
    <div>
      <input type="number" value={number} onChange={(e)=>{setNumber(e.target.value)}} />
      <h1>Cube of the number: {result}</h1>
      <button onClick={()=>{setCounter(counter+1)}}>Counter++</button>
      <h1>Counter: {counter}</h1>
    </div>
  )
}

export default UseMemo
