import React,{useCallback, useState} from 'react'
import Headers from './examples/Headers';

function UseCallback() {

//     useCallback is a React Hook that lets you cache a function definition between re-renders.

// const cachedFn = useCallback(fn, dependencies)

// useCallback is a react hook that lets you cache a function definition between re-renders.
// it means, when we use the useCallback hoook , it doesn't create multipe instance of same function when re-render happens
//Instead of creating new instance of the function , it provides the cached function on re-render of the compnent

    const [count,setCount] = useState(0);

    // const newFn = useCallback(()=>{},[]) //it prevents rerenders
    const newFn = useCallback(()=>{},[count]) // now we have passes the dependencies now it will let the rerender

  return (
    <div>
    {/* <Headers />  */}
    {/* this is beingupdated because of referential equality which simply means is that whenever component rerenders it provides a new function to header since every function has assigned a diff memroy location */}
    <Headers newFn={newFn} /> 
      <h1>{count}</h1>
      <button onClick={()=>setCount((prev)=>prev+1)}>Click Here</button>
    </div>
  )
}

export default UseCallback
