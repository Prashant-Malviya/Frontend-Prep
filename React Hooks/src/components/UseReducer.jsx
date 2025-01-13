import React, { useReducer, useState } from 'react'

function UseReducer() {

    // useReducer is similar to useState, but instead of providing state & setter function. It provides state and dipatch function

// The useReducer hook accepts two arguments
// - Reducer function
// - Initial State
// and returns : current state and dispatch method

//The reducer function specifies how the state gets updated.

// const [count,setCount] = useState(0);

const initialState = {count:0}

const reducer = (state,action)=>{
    switch(action.type){
        case 'increase':{
            return {count: state.count+1}
        }
        case 'decrease':{
            return {count:state.count-1}
        }
        default:{
            return state
        }
    }
    
}

const [state,dispatch] = useReducer(reducer,initialState)




  return (
    <div>
      <h1>{state.count}</h1>

        <button onClick={()=>dispatch({type:"increase"})}>Increase</button>
        <button onClick={()=>dispatch({type:"decrease"})}>decrease</button>

    </div>
  )
}

export default UseReducer
